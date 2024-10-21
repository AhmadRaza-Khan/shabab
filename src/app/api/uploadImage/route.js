import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const file = req.body.image; // Get image file (Base64 or FormData)

    try {
      // Upload image to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(file, {
        folder: 'shabab', // Optional: specify folder
      });

      // Return the URL of the uploaded image
      return res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error) {
      return res.status(500).json({ error: 'Image upload failed.' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
