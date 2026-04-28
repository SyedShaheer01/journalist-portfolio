import mongoose from "mongoose";

const refCodeSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },

    discountPercent: {
      type: Number,
      required: true,
    },

    
  },
  {

      timestamps:{
          createdAt:'create',
          updatedAt:'updated_at'
        }
    }
);

const refCode = mongoose.model("RefCode", refCodeSchema);

export default refCode