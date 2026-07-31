This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Cloudinary product admin

Add these server-only variables to `.env.local` and to your hosting provider:

```bash
ADMIN_UPLOAD_KEY=use-a-long-random-value
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLOUDINARY_PRODUCT_JSON_PUBLIC_ID=jambar/products
CLOUDINARY_PRODUCT_IMAGE_FOLDER=jambar/products
```

Open `/admin/products?key=use-a-long-random-value` to upload product images and publish product data. The browser uploads images directly to Cloudinary using a short-lived server signature; the API secret is never sent to the browser. The product list is stored as the raw Cloudinary asset `jambar/products.json` (or the public ID you configure), and the local JSON remains a fallback until the Cloudinary asset exists.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
