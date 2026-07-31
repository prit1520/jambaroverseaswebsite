import { assertAdminKey, assertCloudinaryConfig, signCloudinaryParams } from "../../../lib/cloudinary";

export default function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    assertAdminKey(req.query.key);
    assertCloudinaryConfig();
    const timestamp = Math.floor(Date.now() / 1000);
    const baseFolder = process.env.CLOUDINARY_PRODUCT_IMAGE_FOLDER || "jambar/products";
    const requestedFolder = typeof req.query.folder === "string" ? req.query.folder : "";
    const productFolder = typeof req.query.productFolder === "string" ? req.query.productFolder.replace(/[^a-zA-Z0-9_-]/g, "") : "";
    const folder = productFolder
      ? `${baseFolder}/${productFolder}`
      : requestedFolder && requestedFolder.startsWith(`${baseFolder}/`)
      ? requestedFolder
      : baseFolder;
    const params = { folder, timestamp };
    return res.status(200).json({
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      timestamp,
      folder,
      signature: signCloudinaryParams(params),
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
