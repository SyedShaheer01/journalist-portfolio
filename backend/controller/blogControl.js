import blog from "../modal/blog.js";


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