import mongoose from "mongoose";

const journalismSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      // unique: true,
    },

    excerpt:{
      type: String,
      required:true
    },

    date: {
      type:String,
      required:true
    },

    publication: {
      type:String,
      required:true
    },

    logo: {
      type:String,
      required: true
    }, // image URL

    link: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      required: true, // e.g. "MainMedia.in", "TheBridge.in"
    },
    //   content: {
    //   type: String,
    //   required: true,
    // },

    
  },

  {

      timestamps:{
          createdAt:'create',
          updatedAt:'updated_at'
        }
    });


const Journalism = mongoose.model("Journalism", journalismSchema);

export default Journalism