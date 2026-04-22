import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
    },

    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },

    image: {
      type: String, // Cloudinary URL
      required: true,
    },
  },
  
  {

      timestamps:{
          createdAt:'create',
          updatedAt:'updated_at'
        }
    });

export default mongoose.model("Blog", blogSchema);