"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const DeleteConfirmationForm = ({ onDelete, itemType, requiredPassword, id, state }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleDelete = () => {
    if (password === requiredPassword) {
      onDelete(id);
      state(false);
      setPassword("");
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex justify-end">
          <IoClose
            className="text-2xl text-gray-600 cursor-pointer hover:text-red-500"
            onClick={() => state(false)}
          />
        </div>
      <div className="flex flex-col bg-black text-white p-6 rounded shadow-md max-w-xs w-full">
        <p className="text-lg font-semibold mb-4">Delete {itemType}</p>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 p-2 rounded mb-3 text-black"
        />
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Confirm Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationForm;
