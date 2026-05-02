import Product from "../modal/product.js";
import cloudinary from "../config/cloudinary.js";



// 📥 LIST
export const listProduct = async (req, res) => {
  try {
    const items = await Product.find({});
   

    res.json({
      success: true,
      data: items,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// ❌ REMOVE
export const removeProduct = async (req, res) => {
  try {
   

    await Product.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "Deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// / ✏️ UPDATE BLOG

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const existingBlog = await Product.findById(id);

    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    let imageUrl = existingBlog.image;

    // ✅ SAFE CHECK (no crash)
    if (req.file && req.file.path) {
      try {
        const uploadRes = await cloudinary.uploader.upload(req.file.path);
        imageUrl = uploadRes.secure_url; // better than .url
      } catch (uploadError) {
        console.log("Cloudinary Error:", uploadError);
        return res.status(500).json({
          success: false,
          message: "Image upload failed",
        });
      }
    }
    

    const updated = await Product.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: imageUrl,
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "product updated successfully",
      data: updated,
    });

  } catch (error) {
    console.log("UPDATE ERROR:", error); // 🔥 DEBUG LINE

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};