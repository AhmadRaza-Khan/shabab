"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { uploadProductAction } from "@/actions/page";
import { toast } from "react-toastify";
let initialData = {
  title: "",
  engTitle: "",
  description: "",
  price: "",
  dosage: "",
  image: "",
};

export default function ProductUploadForm({ close, setClose }) {
  const [data, setData] = useState(initialData);
  const [imageFile, setImageFile] = useState(null);
  const router = useRouter();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET 
        );

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const cloudResponse = await response.json();
        imageUrl = cloudResponse.secure_url;
      }

      const uploadData = await uploadProductAction({
        ...data,
        image: imageUrl,
      });

      if (uploadData.success) {
        toast.success("The product uploaded successfully!😋", {
          style: {
            backgroundColor: "#333",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold"
          },
          progressStyle: {
            background: "#4caf50",
          },
        })
        setClose(false)
            
        setData(initialData);
        router.refresh();
      }
    } catch (error) {
      console.error("Error uploading product: ", error);
      alert("Failed to upload product.");
    }
  };

  return (
    <div className="flex items-center justify-center py-10 px-4">
    {close && (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-lg bg-black shadow-slate-400 shadow-2xl rounded-lg p-6 transition-transform transform scale-95 hover:scale-100"
      >
        <div className="flex justify-end">
          <IoClose
            className="text-2xl text-gray-600 cursor-pointer hover:text-red-500"
            onClick={() => setClose(!close)}
          />
        </div>
  
        <h2 className="text-2xl font-bold text-center text-gray-600 mb-5">
          Upload Product
        </h2>
  
        {/* Product Title */}
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="mb-2 text-gray-600 font-medium">
            Urdu Title
          </label>
          <input
            className="rounded-md border border-gray-300 bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 text-gray-600"
            id="title"
            name="title"
            type="text"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            placeholder="Enter product's Urdu title"
          />
        </div>
  
        {/* English Title */}
        <div className="flex flex-col mb-4">
          <label htmlFor="engTitle" className="mb-2 text-gray-600 font-medium">
            English Title
          </label>
          <input
            className="rounded-md border bg-black text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3"
            id="engTitle"
            name="engTitle"
            type="text"
            value={data.engTitle}
            onChange={(e) => setData({ ...data, engTitle: e.target.value })}
            placeholder="Enter product's English title"
          />
        </div>
  
        {/* Product Description */}
        <div className="flex flex-col mb-4">
          <label htmlFor="description" className="mb-2 text-gray-600 font-medium">
            Product Description
          </label>
          <textarea
            className="rounded-md border bg-black text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3"
            id="description"
            name="description"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Enter product description"
          />
        </div>
  
        {/* Price */}
        <div className="flex flex-col mb-4">
          <label htmlFor="price" className="mb-2 text-gray-600 font-medium">
            Price
          </label>
          <input
            className="rounded-md border bg-black text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3"
            id="price"
            name="price"
            type="text"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
            placeholder="Enter product price"
          />
        </div>
  
        {/* Dosage */}
        <div className="flex flex-col mb-4">
          <label htmlFor="dosage" className="mb-2 text-gray-600 font-medium">
            Dosage
          </label>
          <input
            className="rounded-md border bg-black text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3"
            id="dosage"
            name="dosage"
            type="text"
            value={data.dosage}
            onChange={(e) => setData({ ...data, dosage: e.target.value })}
            placeholder="Enter product dosage"
          />
        </div>
  
        {/* Product Image */}
        <div className="flex flex-col mb-6">
          <label htmlFor="image" className="mb-2 text-gray-600 font-medium">
            Product Image
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            className="border bg-black text-gray-600 border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
            onChange={handleImageChange}
          />
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-md font-semibold transition duration-300 hover:bg-indigo-700"
        >
          Upload Product
        </button>
      </form>
    )}
  </div>
  
  );
}
