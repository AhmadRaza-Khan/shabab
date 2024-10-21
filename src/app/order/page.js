"use client";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { createOrderAction } from '@/actions/page';

const OrderFormCard = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    address: '',
    product: '',
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const productTitle = searchParams.get('product');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const uploadData = await createOrderAction(
        {
          ...formData,
          product: productTitle
        }
      );
      if (uploadData.success) {
          setFormData({
          customerName: '',
          mobile: '',
          address: '',
          product: '',
        });
        toast.success("آپ کا آرڈر موصول ہو چکا ہے، شکریہ🥰آپ سے جلد رابطہ کیا جائے گا", {
          style: {
            backgroundColor: "#333",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "end",
          },
          progressStyle: {
            background: "#4caf50",
          },
        });
        router.replace("/");
      }
    } catch (error) {
      console.log("An error occurred while placing the order", error);
      toast.error("An error occurred while placing the order. Please try again.", {
        style: {
          backgroundColor: "#d9534f",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
        },
      });
    }
  };

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative bg-black shadow-slate-500 rounded-lg shadow-lg w-11/12 max-w-md mx-auto p-6">
        <IoClose className="absolute top-4 text-white text-2xl right-4 cursor-pointer" onClick={() => router.back()} />
        <h2 className="text-2xl font-bold text-white text-center mb-6">Order Form</h2>
        <form action={handleSubmit}>
          {/* Customer Name */}
          <div className="mb-4">
            <p className="block text-white text-sm font-bold mb-2">
              Customer Name
            </p>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Mobile */}
          <div className="mb-4">
            <p className="block text-white text-sm font-bold mb-2">
              Mobile
            </p>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Address */}
          <div className="mb-4">
            <p className="block text-white text-sm font-bold mb-2">
              Address
            </p>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 urdu-text hover:bg-blue-600 text-white text-lg font-bold py-2 px-10 rounded-md"
            >
              آڈر
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderFormCard;
