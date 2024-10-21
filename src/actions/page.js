"use server";
import Joi from "joi";
import connectDB from "@/database";
import Order from "@/models/Order";
import Product from "@/models/Product";
import Feedback from "@/models/Feedback";
import Blog from "@/models/Blog";
import Comment from "@/models/Comment";

const string = process.env.NEXT_PUBLIC_SECRET_STRING
const addNewFeedBack = Joi.object({
    feedback: Joi.string().required()
})

const addNewProduct = Joi.object({
  customerName: Joi.string().required(),
  mobile: Joi.string().required(),
  address: Joi.string().required(),
  product: Joi.string().required()
})
const addComment = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  comment: Joi.string().required(),
  blogId: Joi.string().required()
})


export async function uploadProductAction(formData) {
  try {
    await connectDB();

    const newlyUploadedProduct = await Product.create(formData);

    if (newlyUploadedProduct) {
      return {
        success: true,
        message: "Product Uploaded Successfully!!",
      };
    } else {
      return {
        success: false,
        message: "Failed to upload product! Try again!!",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong. Try again!!",
    };
  }
}

export async function getProductAction() {
  try {
      await connectDB();
  const products = await Product.find({});
            return {
              success: true,
              data: JSON.parse(JSON.stringify(products)),
              message: "Products fetched Successfully!!",
          };
      
      
  } catch (error) {
      console.log(error);
      return {
          success: false,
          message: "Something went wrong. Try again!!",
      };
  }
}

export async function getProductDetailsAction(id) {
  try {
      await connectDB();
      const getProduct = await Product.findById(id);
      if (getProduct) {
          return {
              success: true,
              product: JSON.parse(JSON.stringify(getProduct)),
              message: "Product fetched successfully!!"
          }
      } else {
          return {
              success: false,
              message: "Failed to fetched product!! Product not found.",
              status: 404
          }
      }
  } catch (error) {
      console.log(error);
      return {
          success: false,
          message: "Something went wrong!! Please try again!!",
          status: 500
      }
  }
}

export async function getOrdersAction() {
  try {
      await connectDB();
  const orders = await Order.find({});
          return {
              success: true,
              data: JSON.parse(JSON.stringify(orders)),
              message: "Orders fetched Successfully!!",
          };
      
      
  } catch (error) {
      console.log(error);
      return {
          success: false,
          message: "Something went wrong. Try again!!",
      };
  }
}

export async function deteteProductAction(id) {
  try {
      await connectDB();
      const deleteCurrentProduct = await Product.findByIdAndDelete(id);
      if (deleteCurrentProduct) {
          return {
              success: true,
              message: "Product deleted successfully!!"
          };
      } else {
          return {
              success: false,
              message: "Failed to delete product!! Product not found.",
              status: 404
          }
      }
  } catch (error) {
      console.log(error);
      return {
          success: false,
          message: "Something went wrong!! Please try again!!",
          status: 500
      }
  }
}

export async function deleteOrderAction(id) {
  try {
      await connectDB();
      const deleteCurrentOrder = await Order.findByIdAndDelete(id);
      if (deleteCurrentOrder) {
          return{
              success: true,
              message: "Order deleted successfully!!"
          };
      } else {
         
          return {
              success: false,
              message: "Failed to delete order!! Order not found.",
              status: 404
          }
      }
  } catch (error) {
      console.log(error);
      return {
          success: false,
          message: "Something went wrong!! Please try again!!",
          status: 500
      }
  }
}

export async function createOrderAction(formData) {
    try {
        await connectDB();
        const { customerName, mobile, address, product} = formData;
        const {error} = addNewProduct.validate({
            customerName, mobile, address, product
        })

        if(error){
            return {
                success: false,
                message: error.details[0].message
            }
        }
        const newOrder = await Order.create(formData);
        if(newOrder){
            return {
                success: true,
                message: "Order placed successfully!!"
            }
        } else {
            return {
                success: false,
                message: "Failed to place order! Try again!!"
            }
        }

        
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong. Try again!!"
        }
        
    }
    
}

export async function feedbackAction(feedbackData) {
    try {
        await connectDB();
        const { feedback } = feedbackData;
        const {error} = addNewFeedBack.validate({
            feedback
        })
        if(error){
            return {
                success: false,
                message: error.details[0].message
            }
        }
        if(feedback === string){
            return {
                admin: true,
                message: "Feedback sent Successfully!!"
            }
        }
        const newFeedback = await Feedback.create(feedbackData);
        if(newFeedback){
            return {
            success: true,
            message: "Feedback sent Successfully!!"
        }
    }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong. Try again!!"
        }
        
    }
    
}

export async function uploadBlogAction(formData) {
    try {
      await connectDB();
  
      const newlyUploadedBlog = await Blog.create(formData);
  
      if (newlyUploadedBlog) {
        return {
          success: true,
          message: "Blog Uploaded Successfully!!",
        };
      } else {
        return {
          success: false,
          message: "Failed to upload blog! Try again!!",
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Something went wrong. Try again!!",
      };
    }
  }

export async function getBlogAction() {
    try {
        await connectDB();
    const blogs = await Blog.find({});
              return {
                success: true,
                data: JSON.parse(JSON.stringify(blogs)),
                message: "Blogs fetched Successfully!!",
            };
        
        
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong. Try again!!",
        };
    }
  }

export async function deleteBlogAction(id) {
    try {
        await connectDB();
        const deleteCurrentBlog = await Blog.findByIdAndDelete(id);
        if (deleteCurrentBlog) {
            return{
                success: true,
                message: "Blog deleted successfully!!"
            };
        } else {
           
            return {
                success: false,
                message: "Failed to delete blog!! Blog not found.",
                status: 404
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong!! Please try again!!",
            status: 500
        }
    }
  }

export async function getBlogDetailsAction(title) {
    try {
        await connectDB();
        const blog = await Blog.findOne({ title });

        if (blog) {
            const comments = await Comment.find({ blogId: blog._id }).sort({ createdAt: -1 });

            return {
                success: true,
                data: {
                    blog: JSON.parse(JSON.stringify(blog)),
                    comments: JSON.parse(JSON.stringify(comments))
                },
                message: "Blog and comments fetched successfully!!"
            };
        } else {
            return {
                success: false,
                message: "Failed to fetch blog! Blog not found.",
                status: 404
            };
        }
    } catch (error) {
        console.error("Error fetching blog and comments:", error);
        return {
            success: false,
            message: "Something went wrong! Please try again.",
            status: 500
        };
    }
}

export async function addCommentAction(formData) {
    try {
        await connectDB();
        const {name, email, comment, blogId} = formData
        const {error} = addComment.validate({
            name, email, comment, blogId
        })
        if(error){
            return {
                success: false,
                message: error.details[0].message
            }
        }

        const newCreatedComment = await Comment.create(formData);
        if (newCreatedComment) {
            return {
                success: true,
                message: "comment created successfully!!"
            };
        } else {
            return {
                success: false,
                message: "Failed to add comment!",
                status: 404
            };
        }
    } catch (error) {
        console.error("Error adding comments:", error);
        return {
            success: false,
            message: "Something went wrong! Please try again.",
            status: 500
        };
    }
}

export async function deleteCommentAction(id) {
    try {
        await connectDB();
        const deleteCurrentComment = await Comment.findByIdAndDelete(id);
        if (deleteCurrentComment) {
            return{
                success: true,
                message: "Comment deleted successfully!!"
            };
        } else {
           
            return {
                success: false,
                message: "Failed to delete comment!! Comment not found.",
                status: 404
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong!! Please try again!!",
            status: 500
        }
    }
  }