import refCode from "../modal/refCode.js";

// 🎯 APPLY REF CODE (IMPORTANT)

export const applyRefCode = async (req, res) => {
  try {
    const { code } = req.body;

    const ref = await refCode.findOne({
      code,
    });

    if (!ref) {
      return res.status(400).json({
        success: false,
        message: "Invalid code",
      });
    }
   
    res.json({
      success: true,
       message: "Code applied",
      discount: ref.discountPercent + "%",
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ➕ ADD REF CODE (ADMIN)
export const addRefCode = async (req, res) => {
  try {
    const { code, discountPercent } = req.body;

    const ref = new refCode({
      code,
      discountPercent,
    });

    const saved = await ref.save();

    res.json({
      success: true,
      data: saved,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// listt

export const listCode = async (req, res) => {
  try {
    const items = await refCode.find({});
   

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
export const removeCode = async (req, res) => {
  try {
   

    await refCode.findByIdAndDelete(req.body.id);

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
