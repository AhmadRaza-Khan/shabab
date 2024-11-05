"use client";
import { addCommentAction, getBlogAction, getBlogDetailsAction } from "@/actions/page";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaPaperPlane, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const initialData = {
  name: "",
  email: "",
  comment: "",
  blogId: ""
};

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const[blogComments, setBlogComments] = useState([]);
  const [data, setData] = useState(initialData);
  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const response = await getBlogAction();
      selectBlog(response.data[0].title);
      setBlogs(response.data);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false)
    }
  };
  const selectBlog = async (title) => {
    try {
      setLoading(true)
      const response = await getBlogDetailsAction(title);
      setSelectedBlog(response.data.blog);
      setBlogComments(response.data.comments)
      setData({ ...data, blogId: response.data.blog._id });
      setLoading(false)
      setIsOpen(false)
    } catch (error) {
      console.error("Error fetching blog details:", error);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uploadData = await addCommentAction(data);
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
    <div className="flex flex-col md:flex-row">
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button className="text-white text-2xl p-2" onClick={() => setIsOpen(true)}>
          <FaBars />
        </button>

        <div
          className={`fixed top-0 left-0 h-full bg-black opacity-85 w-52 shadow-md text-white z-50 transform transition-transform overflow-y-auto ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-lg" />
            </button>
          </div>
          <ul className="flex flex-col gap-4 text-right p-3 h-full rounded-md border-2 border-slate-600">
            {blogs.map((blog, index) => (
              <li key={index}>
                <button
                  className={`text-sm border-2 border-slate-600 rounded-md py-2 w-full urdu-text tracking-wider ${
                    selectedBlog?.title === blog.title ? "text-red-700" : "text-slate-600"
                  }`}
                  onClick={() => selectBlog(blog.title)}
                >
                  {blog.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {isOpen && <div className="fixed inset-0 bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 md:h-screen border-2 border-slate-600 rounded-lg text-white md:p-4 md:overflow-y-auto shadow-md">
        <b className="text-slate-400 mx-auto text-center tracking-wider urdu-text text-lg mb-10">یہاں مزید پڑھیے</b>
        <ul className="space-y-4 text-right">
          {blogs.map((blog, index) => (
            <li key={index}>
              <button
                className={`text-base tracking-wider border-2 border-slate-600 rounded-md py-2 w-full urdu-text ${
                  selectedBlog?.title === blog.title ? "text-red-700" : "text-slate-400"
                }`}
                onClick={() => selectBlog(blog.title)}
              >
                {blog.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Blog Content and Comment Section */}
      {
        loading ? 
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-6xl font-bold text-white mb-8 animate-bounce drop-shadow-lg">Loading...</h1>

      {/* Custom Animated Circles Loader */}
      <div className="flex space-x-4">
        <div className="w-8 h-8 bg-white rounded-full animate-ping shadow-md"></div>
        <div className="w-8 h-8 bg-white rounded-full animate-pulse shadow-md"></div>
        <div className="w-8 h-8 bg-white rounded-full animate-ping shadow-md"></div>
      </div>

      <p className="text-white text-lg mt-8 animate-pulse opacity-90">Please wait, we are fetching your content!</p>
    </div>
        : 
        <div className="flex-1 p-6 text-white shadow-md lg:mx-6 overflow-y-auto h-screen">
        <div>
        <h1 className="text-lg lg:text-2xl tracking-wider urdu-text leading-10 text-slate-400 text-center my-5">
        {selectedBlog?.title}
      </h1>
      <p className="text-slate-400 tracking-wider urdu-text leading-8 text-end text-base lg:text-xl mb-4">تعارف</p>
      <p className="text-end text-xs lg:text-sm tracking-wider leading-6 lg:leading-10 urdu-text mb-6">
        {selectedBlog?.introduction}
      </p>

      <p className="text-base lg:text-xl tracking-wider urdu-text leading-8 text-slate-400 text-end mb-4">
        {selectedBlog?.heading1}
      </p>

      <div>
        <img src={selectedBlog?.image1} className="contain h-40 w-11/12 mx-auto my-6" />
      </div>

      <p className="text-end text-xs lg:text-sm tracking-wider urdu-text leading-6 lg:leading-10 mb-6">
        {selectedBlog?.para1}
      </p>

      <p className="text-base lg:text-xl tracking-wider urdu-text leading-8 text-slate-400 text-end mb-4">
        {selectedBlog?.heading2}
      </p>

      <div>
        <img src={selectedBlog?.image2} className="contain h-40 w-11/12 mx-auto my-6" />
      </div>

      <p className="text-end text-xs lg:text-sm tracking-wider urdu-text leading-6 lg:leading-10 mb-10">
        {selectedBlog?.para2}
      </p>
        </div>

        {/* Comment Section */}
        <div className="w-full shadow-md p-4 shadow-slate-600">
          {
            blogComments.length > 1 &&
            <>
            <p className="text-white text-center text-lg">Comments</p>
            {
              blogComments?.map((data, index)=>(
                <div key={index + 1} className="rounded-md border border-slate-600 py-2 my-6">
                  <div className="flex flex-col px-3 mb-3">
                  <p className="text-sm tracking-wider urdu-text text-slate-400">
              {data?.name}
            </p>
                  <p className="text-xs tracking-wider urdu-text leading-10 text-slate-400">
                  {new Date(data?.createdAt).getMonth() + 1} /
              {new Date(data?.createdAt).getDate()} /
              {new Date(data?.createdAt).getFullYear()} 
            </p>
                  </div>
            <p className="text-xs w-fit px-2 text-end lg:text-sm tracking-wider mb-2 leading-6 lg:leading-10 urdu-text">
              {data?.comment}
            </p>
                </div>
              )) 
            }
            </>
          }
          
          
          <button className="border-2 border-stone-slate-600 hover:bg-slate-800 rounded-md py-1 px-2" onClick={()=> setShowComment(!showComment)}>
            Add Comment
          </button>
                  {/* Add Comment Section */}
          {
          showComment && 
          <div className="lg:w-1/2 w-full flex flex-col items-center shadow-md mx-auto shadow-slate-600 p-4 rounded-md">
          <b className="text-white text-center text-lg lg:text-x">Add Comment Here!</b>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2 text-base lg:text-lg urdu-text text-end text-gray-600 font-medium">
                نام
              </label>
              <input
                className="rounded-md border urdu-text text-center border-gray-300 bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 text-white"
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
        }
        </div>
        
      </div>
      }

      {/* Scrollbar Styling */}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #000;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #444;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
