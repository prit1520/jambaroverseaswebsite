import localProducts from "../components/products.json";
import axios from "axios";

export const cloudinaryProductsUrl = () => {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_PRODUCT_JSON_PUBLIC_ID) {
    return null;
  }

  const publicId = process.env.CLOUDINARY_PRODUCT_JSON_PUBLIC_ID.replace(/^\/+|\/+$/g, "");
  return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/raw/upload/${publicId}.json`;
};

export async function getProducts() {
  const url = cloudinaryProductsUrl();
  if (!url) return localProducts;

  try {
    const response = await axios.get(`${url}?v=${Date.now()}`);
    const products = response.data;
    return Array.isArray(products) ? products : localProducts;
  } catch (error) {
    console.error("Unable to load products from Cloudinary; using local fallback.", error);
    return localProducts;
  }
}
