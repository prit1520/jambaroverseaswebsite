import crypto from "crypto";
import axios from "axios";
import FormData from "form-data";

export function assertCloudinaryConfig() {
  const required = [
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
    "CLOUDINARY_PRODUCT_JSON_PUBLIC_ID",
  ];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) throw new Error(`Missing environment variables: ${missing.join(", ")}`);
}

export function assertAdminKey(value) {
  if (!process.env.ADMIN_UPLOAD_KEY || !value || value !== process.env.ADMIN_UPLOAD_KEY) {
    const error = new Error("Invalid admin key");
    error.statusCode = 401;
    throw error;
  }
}

export function signCloudinaryParams(params) {
  const serialized = Object.keys(params)
    .sort()
    .filter((key) => params[key] !== undefined && params[key] !== null && params[key] !== "")
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  return crypto.createHash("sha1").update(`${serialized}${process.env.CLOUDINARY_API_SECRET}`).digest("hex");
}

export async function uploadProductsJson(products) {
  const timestamp = Math.floor(Date.now() / 1000);
  const publicId = process.env.CLOUDINARY_PRODUCT_JSON_PUBLIC_ID.replace(/^\/+|\/+$/g, "");
  const params = { overwrite: "true", invalidate: "true", public_id: publicId, timestamp };
  const form = new FormData();
  form.append("file", Buffer.from(JSON.stringify(products, null, 2)), {
    filename: "products.json",
    contentType: "application/json",
  });
  Object.keys(params).forEach((key) => form.append(key, params[key]));
  form.append("api_key", process.env.CLOUDINARY_API_KEY);
  form.append("signature", signCloudinaryParams(params));

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/raw/upload`,
    form,
    { headers: form.getHeaders(), maxContentLength: Infinity, maxBodyLength: Infinity }
  );
  return response.data;
}

