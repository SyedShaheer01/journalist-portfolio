import mongoose from "mongoose";

const copyWritingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
    },

    type: {
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

  },
  
  {

      timestamps:{
          createdAt:'create',
          updatedAt:'updated_at'
        }
    });

export default mongoose.model("CopyWriting", copyWritingSchema);