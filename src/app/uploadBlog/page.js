"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { uploadBlogAction } from "@/actions/page";
import { toast } from "react-toastify";

let initialData = {
  title: "",
  introduction: "",
  heading1: "",
  heading2: "",
  para1: "",
  para2: "",
  image1: "",
  image2: "",
};

export default function BlogUploadForm({ showBlogForm, setShowBlogForm }) {
  const [data, setData] = useState(initialData);
  const [imageFiles, setImageFiles] = useState({ image1: null, image2: null });
  const router = useRouter();

  // Handle file input for both images
  const handleImageChange = (event, imageKey) => {
    const file = event.target.files[0];
    setImageFiles((prev) => ({ ...prev, [imageKey]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrls = { image1: "", image2: "" };

      // Upload first image if it exists
      if (imageFiles.image1) {
        const formData1 = new FormData();
        formData1.append("file", imageFiles.image1);
        formData1.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        );

        const response1 = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData1,
          }
        );

        const cloudResponse1 = await response1.json();
        imageUrls.image1 = cloudResponse1.secure_url;
      }

      // Upload second image if it exists
      if (imageFiles.image2) {
        const formData2 = new FormData();
        formData2.append("file", imageFiles.image2);
        formData2.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        );

        const response2 = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData2,
          }
        );

        const cloudResponse2 = await response2.json();
        imageUrls.image2 = cloudResponse2.secure_url;
      }

      // Submit the blog data with image URLs
      const uploadData = await uploadBlogAction({
        ...data,
        image1: imageUrls.image1,
        image2: imageUrls.image2,
      });
console.log(uploadData)
      if (uploadData.success) {
        toast.success("The blog uploaded successfully!😋", {
          style: {
            backgroundColor: "#333",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
          },
          progressStyle: {
            background: "#4caf50",
          },
        });
        setShowBlogForm(false);
        setData(initialData);
        setImageFiles({ image1: null, image2: null });
        router.refresh();
      }
    } catch (error) {
      console.error("Error uploading blog: ", error);
      alert("Failed to upload blog.");
    }
  };

  return (
    <div className="flex items-center justify-center py-10 px-4">
      {showBlogForm && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg bg-black shadow-slate-400 shadow-2xl rounded-lg p-6 transition-transform transform scale-95 hover:scale-100"
        >
          <div className="flex justify-end">
            <IoClose
              className="text-2xl text-gray-600 cursor-pointer hover:text-red-500"
              onClick={() => setShowBlogForm(!showBlogForm)}
            />
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-600 mb-5">
            Upload Blog
          </h2>

          {/* Blog Title */}
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="mb-2 text-gray-600 font-medium">
              Title
            </label>
            <input
              className="rounded-md border border-gray-300 bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 text-gray-600"
              id="title"
              name="title"
              type="text"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="Enter blog title"
            />
          </div>

{/* Introduction */}
<div className="flex flex-col mb-4">
          <label htmlFor="introduction" className="mb-2 text-gray-600 font-medium">
           Introduction
          </label>
          <textarea
            className="rounded-md border bg-black text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3"
            id="introduction"
            name="introduction"
            value={data.introduction}
            onChange={(e) => setData({ ...data, introduction: e.target.value })}
            placeholder="Enter blog introduction"
          />
        </div>
  
        {/* Blog heading1 */}
        <div className="flex flex-col mb-4">
          <label htmlFor="heading1" className="mb-2 text-gray-600 font-medium">
            First Heading
          </label>
          <input
            className="rounded-md border bg-black text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3"
            id="heading1"
            name="heading1"
            type="text"
            value={data.heading1}
            onChange={(e) => setData({ ...data, heading1: e.target.value })}
            placeholder="Enter blog first heading"
          />
        </div>
  
        {/* First Paragraph */}
        <div className="flex flex-col mb-4">
          <label htmlFor="para1" className="mb-2 text-gray-600 font-medium">
            First Paragraph
          </label>
          <textarea
            className="rounded-md border bg-black text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3"
            id="para1"
            name="para1"
            value={data.para1}
            onChange={(e) => setData({ ...data, para1: e.target.value })}
            placeholder="Enter First Paragraph "
          />
        </div>
  
        {/* Second Heading */}
        <div className="flex flex-col mb-4">
          <label htmlFor="heading2" className="mb-2 text-gray-600 font-medium">
            Secong Heading
          </label>
          <input
            className="rounded-md border bg-black text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3"
            id="heading2"
            name="heading2"
            type="text"
            value={data.heading2}
            onChange={(e) => setData({ ...data, heading2: e.target.value })}
            placeholder="Enter second Heading"
          />
        </div>
        {/* Second Paragraph */}
        <div className="flex flex-col mb-4">
          <label htmlFor="para2" className="mb-2 text-gray-600 font-medium">
            Secong Paragraph
          </label>
          <textarea
            className="rounded-md border bg-black text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3"
            id="para2"
            name="para2"
            value={data.para2}
            onChange={(e) => setData({ ...data, para2: e.target.value })}
            placeholder="Enter second Paragraph"
          />
        </div>
  
          {/* First Image */}
          <div className="flex flex-col mb-6">
            <label htmlFor="image1" className="mb-2 text-gray-600 font-medium">
              First Image
            </label>
            <input
              id="image1"
              name="image1"
              type="file"
              accept="image/*"
              className="border bg-black text-gray-600 border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
              onChange={(event) => handleImageChange(event, "image1")}
            />
          </div>

          {/* Second Image */}
          <div className="flex flex-col mb-6">
            <label htmlFor="image2" className="mb-2 text-gray-600 font-medium">
              Second Image
            </label>
            <input
              id="image2"
              name="image2"
              type="file"
              accept="image/*"
              className="border bg-black text-gray-600 border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
              onChange={(event) => handleImageChange(event, "image2")}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-md font-semibold transition duration-300 hover:bg-indigo-700"
          >
            Upload Blog
          </button>
        </form>
      )}
    </div>
  );
}
