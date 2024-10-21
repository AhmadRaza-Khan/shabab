"use client";
import { useState, useEffect } from "react";
import ProductUploadForm from "../uploadProduct/page";
import { MdDelete, MdComment } from "react-icons/md";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { deleteBlogAction, deleteCommentAction, deleteOrderAction, deteteProductAction, getBlogAction, getBlogDetailsAction, getOrdersAction, getProductAction } from "@/actions/page";
import Image from "next/image";
import BlogUploadForm from "../uploadBlog/page";

const AdminDashboard = () => {
  const [close, setClose] = useState(false);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [data, setData] = useState([]);
  const [order, setOrder] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [showCommentDetails, setShowCommentDetails] = useState(false);
  const[blogComments, setBlogComments] = useState([]);
  const router = useRouter();
  const fetchData = async () => {
    const response = await getProductAction();
    setData(response.data);
  };
 const fetchBlogs = async ()=>{
  const response = await getBlogAction()
  setBlogs(response.data)
 }
  const fetchOrders = async () => {
    const responseData = await getOrdersAction();
    setOrder(responseData.data);
  };

  const deleteProduct = async (getId) => {
    const password = window.prompt("Please enter your password to confirm product deletion:");
    if (password === "daaroo") {
      const confirmed = window.confirm("Are you sure you want to delete this product?");
      if (confirmed) {
        try {
          const responseData = await deteteProductAction(getId);
          if (responseData.success) {
            router.refresh();
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert("Incorrect password.");
    }
  };

  const deleteOrder = async (orderId) => {
    await deleteOrderAction(orderId);
    setOrder(order.filter((order) => order._id !== orderId));
    router.refresh();
  };
  const deleteBlog = async (blogId) => {
    const password = window.prompt("Please enter your password to confirm blog deletion:");
    if (password === "blogo") {
      const confirmed = window.confirm("Are you sure you want to delete this blog?");
      if (confirmed) {
        try {
          await deleteBlogAction(blogId);
          setOrder(blogs.filter((blog) => blog._id !== blogId));
        } catch (error) {
          console.error("Error deleting blog:", error);
        }
      }
    } else {
      alert("Incorrect password.");
    }
  };
  const selectBlog = async (title) => {
    try {
      const response = await getBlogDetailsAction(title);
      setBlogComments(response.data.comments)
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };
  const deleteComment = async (id)=> {
    const password = window.prompt("Please enter your password to confirm comment deletion:");
    if (password === "commento") {
      const confirmed = window.confirm("Are you sure you want to delete this comment?");
      if (confirmed) {
        try {
          await deleteCommentAction(id);
          router.refresh();
        } catch (error) {
          console.error("Error deleting comment:", error);
        }
      }
    } else {
      alert("Incorrect password.");
    }
    
  }
  useEffect(() => {
    fetchData();
    fetchOrders();
    fetchBlogs();
  }, []);
  const handleLogout = () => {
    document.cookie = "isAdmin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/");
  };

  return (
<div className="flex flex-col items-center justify-center relative min-h-screen bg-black">
  <h1 className="text-3xl font-bold mt-10 text-white">Admin Panel</h1>
          <button
            className="bg-black border-2 absolute top-[130px] lg:top-[134px] right-6 border-white text-white py-1 lg:py-2 px-4 rounded-md hover:bg-gray-800"
            onClick={handleLogout}
          >
            Logout
          </button>

  <div className="flex flex-col lg:flex-row justify-around gap-10 items-start mt-8 w-full max-w-screen-xl">
    
    {/* Orders Section */}
    <div className="flex flex-col bg-black shadow-md shadow-slate-400 p-6 rounded-lg w-full lg:w-1/2">
      <h2 className="text-xl font-semibold mb-6 text-white">Orders</h2>
      <div className="space-y-4">
        {order.length === 0 ? (
          <p className="text-white">No orders available.</p>
        ) : (
          order.map((order, index) => (
            <div
              key={index + 1}
              className="flex justify-between items-center bg-black p-4 rounded-md border border-gray-300 shadow-md shadow-slate-400"
            >
              <div>
                <p className="font-semibold text-white">Order {index + 1}:</p>
                <p className="text-white">Customer: {order.customerName}</p>
                <p className="text-white">Mobile: {order.mobile}</p>
                <p className="text-white">Address: {order.address}</p>
                <p className="text-white">Product: {order.product}</p>
              </div>
              <MdDelete
                className="text-red-600 cursor-pointer hover:text-red-800"
                onClick={() => deleteOrder(order._id)}
                size={24}
              />
            </div>
          ))
        )}
      </div>
    </div>

    {/* Products and Blogs Section */}
    <div className="flex flex-col w-full lg:w-1/2 gap-6">
      {/* Products Section */}
      <div className="bg-black shadow-md shadow-slate-400 p-6 rounded-lg">
        <div className="flex justify-between">
          <button
            className="bg-black border-2 border-white text-white py-2 px-4 rounded-md hover:bg-gray-900"
            onClick={() => setClose(true)}
          >
            Upload New Product
          </button>
        </div>

        {!close && (
          <>
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Current Products</h2>
            <div className="space-y-3">
              {data?.map((product, index) => (
                <div
                  key={index + 1}
                  className="flex justify-between items-center bg-black p-4 rounded-md border border-gray-300 shadow-md shadow-slate-400"
                >
                  <p className="font-medium text-white">{index + 1}.</p>
                  <h3 className="flex-grow text-center font-semibold text-white">{product.title}</h3>
                  <Image
                    src={product.image}
                    alt="img"
                    height={40}
                    width={40}
                    className="rounded-full h-10 w-10 object-cover"
                  />
                  <MdDelete
                    onClick={() => deleteProduct(product._id)}
                    className="text-red-600 cursor-pointer ml-5 hover:text-red-800"
                    size={24}
                  />
                </div>
              ))}
            </div>
          </>
        )}
        <ProductUploadForm close={close} setClose={setClose} />
      </div>

      {/* Blogs Section */}
      <div className="bg-black shadow-md shadow-slate-400 p-6 rounded-lg">
        <button
          className="bg-black border-2 mx-auto border-white text-white py-2 px-4 rounded-md hover:bg-gray-900"
          onClick={() => setShowBlogForm(true)}
        >
          Upload New Blog
        </button>

        {!showBlogForm && (
          <>

           {
            showCommentDetails ? 
            <div className="flex flex-col relative shadow-md shadow-slate-600 py-5 pb-10 items-center justify-center space-y-3">
            <IoClose onClick={()=> setShowCommentDetails(!showCommentDetails)} className="text-white hover:text-red-600 text-xl absolute top-2 right-2 text-end"/>
            <p className="text-slate-600 my-10 text-2xl">Comments</p>
            {blogComments.length > 0? blogComments?.map((data, index) => (
              <div key={index + 1} className="flex items-center border left-8 lg:leading-10 tracking-wider rounded-md border-slate-600 w-full justify-between">
                <MdDelete onClick={()=> deleteComment(data._id)} className="text-2xl text-red-500" />
                <p className="text-white urdu-text px-2 py-3">{data?.comment}</p>
              </div> 
            )) :  <p className="text-lg text-white">No comments posted for this blog yet!!</p> } 
          </div>          
          :
          <div className="space-y-3">
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Current Blogs</h2>
          {blogs?.map((blog, index) => (
            <div
              key={index + 1}
              className="flex justify-between items-center bg-black p-4 rounded-md border border-gray-300 shadow-md shadow-slate-400"
            >
              <p className="font-medium text-white">{index + 1}.</p>
              <h3 className="flex-grow text-center font-semibold text-white">{blog.title}</h3>
              <MdComment onClick={()=> {selectBlog(blog.title), setShowCommentDetails(!showCommentDetails)}} className="text-green-600 cursor-pointer text-2xl hover:text-green-800" />
              <MdDelete
                onClick={() => deleteBlog(blog._id)}
                className="text-red-600 cursor-pointer ml-5 hover:text-red-800"
                size={24}
              />
            </div>
          ))}
        </div>
           } 
           
          </>
        )}
        <BlogUploadForm showBlogForm={showBlogForm} setShowBlogForm={setShowBlogForm} />
      </div>
    </div>
  </div>
</div>
  );
};

export default AdminDashboard;
