"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from 'react-toastify';
import { feedbackAction } from "@/actions/page";

const backgroundStyle = {
  backgroundImage: "url('./jk.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
};

export default function Feedback() {
  const [feedback, setFeedback] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uploadData = await feedbackAction({feedback})
      if (uploadData.success) {
        setFeedback("");
        toast.success("فیڈ  بیک  دینے  کے  لیے  شکریہ 🥰۔۔۔", {
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
        router.replace("/");
      }

      if (uploadData.admin) {
        document.cookie = "isAdmin=true; path=/";
        setFeedback("");
        router.push("/admin-dashboard");
      }
    } catch (error) {
      console.error("Error sending feedback: ", error);
      alert("Failed to send feedback.");
    }
  };

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const getTextAlignment = () => {
    const urduRegex = /[\u0600-\u06FF]/;
    return urduRegex.test(feedback) ? "text-right" : "text-left";
  };
  return (
    <div style={backgroundStyle} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 to-blue-200">
      <div className="bg-transparent mt-10 lg:mt-20 shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-xl lg:text-3xl urdu-text font-semibold text-center text-black mb-4 lg:mb-8">
          ہم آپ کی رائے کا احترام کرتے ہیں
        </h1>
        <p className="text-center tracking-wide urdu-text text-black mb-8">
          یہاں اپنے خیالات کا اظہار کیجیے، آپ کے خیالات کا احترام کیا جائے گا
        </p>
        <form onSubmit={handleSubmit} className="mb-6 space-y-6">
          <div>
            <textarea
              className={`w-full bg-transparent p-4 border-2 placeholder:urdu-text placeholder:text-black rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 ${getTextAlignment()}`}
              rows="6"
              placeholder={feedback.includes('آ') ? "یہاں اپنی رائے کا اظہار کیجیے" : "Please share your feedback here"}
              value={feedback}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex urdu-text items-center justify-center py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-lg font-semibold transition"
          >
            رائے ارسال کریں <FaPaperPlane className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}
