import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const file = req.body.image;

    try {
      const uploadResponse = await cloudinary.uploader.upload(file, {
        folder: 'shabab',
      });

      return res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error) {
      return res.status(500).json({ error: 'Image upload failed.' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
