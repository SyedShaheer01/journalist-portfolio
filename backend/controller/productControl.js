import Product from "../modal/product.js";




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