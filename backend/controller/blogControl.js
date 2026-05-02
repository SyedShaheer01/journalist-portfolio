import blog from "../modal/blog.js";
import cloudinary from "../config/cloudinary.js";


export const listBlog = async (req, res) => {
  try {
    const items = await blog.find({});
   

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
export const removeBlog = async (req, res) => {
  try {
   

    await blog.findByIdAndDelete(req.body.id);

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

// ✏️ UPDATE BLOG
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const existingBlog = await blog.findById(id);

    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
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
    

    const updated = await blog.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        slug: req.body.slug,
        excerpt: req.body.excerpt,
        content: req.body.content,
        image: imageUrl,
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Blog updated successfully",
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