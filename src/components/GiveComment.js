"use client"
import { addCommentAction } from "@/actions/page";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa";
import { useRouter } from "next/router";

const GiveComment = ({data, setData, initialData}) => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const uploadData = await addCommentAction(data);
          console.log(uploadData)
          if (uploadData.success) {
            setData(initialData);
            toast.success("اپنی رائے کے اظہار کے لیے شکریہ 🥰۔۔۔", {
              style: {
                backgroundColor: "#333",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "end"
              },
              progressStyle: {
                background: "#4caf50"
              }
            });
            router.refresh();
          }
        } catch (error) {
          console.error("Error sending comment: ", error);
          alert("Failed to send comment.");
        }
      };
    
  return (
<div className="lg:w-1/2 w-full flex flex-col items-center shadow-md mx-auto shadow-slate-600 p-4 rounded-md">
          <b className="text-white text-center text-lg lg:text-x">Comments Section</b>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2 text-base lg:text-lg urdu-text text-end text-gray-600 font-medium">
                نام
              </label>
              <input
                className="rounded-md border urdu-text border-gray-300 bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 text-white"
                id="name"
                name="name"
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-2 text-base lg:text-lg urdu-text text-end text-gray-600 font-medium">
                ای میل
              </label>
              <input
                className="rounded-md border urdu-text border-gray-300 bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 text-white"
                id="email"
                name="email"
                type="text"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="comment" className="mb-2 text-end text-base lg:text-lg urdu-text text-gray-600 font-medium">
                رائے
              </label>
              <textarea
                id="comment"
                className="w-full bg-transparent p-4 border urdu-text placeholder:text-white placeholder:text-end rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="6"
                placeholder="یہاں اپنی رائے کا اظہار کیجیے"
                value={data.comment}
                onChange={(e) => setData({ ...data, comment: e.target.value })}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black hover:bg-gray-800 border-2 border-indigo-500 text-white rounded-md text-lg font-semibold transition flex items-center justify-center"
            >
              رائے ارسال کریں <FaPaperPlane className="ml-2" />
            </button>
          </form>
        </div>
  )
}

export default GiveComment