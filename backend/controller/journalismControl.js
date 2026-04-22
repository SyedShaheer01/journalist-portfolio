import Journalism from "../modal/journalism.js";


// ➕ ADD JOURNALISM (WITH IMAGE UPLOAD)
// export const addJournalism = async (req, res) => {
//   try {
//     const {
//       title,
//       slug,
//       excerpt,
//       date,
//       publication,
//       link,
//       label,
//     } = req.body;

//     // Cloudinary image URL
//     const logo = req.file ? req.file.path : "";

//     const newItem = new Journalism({
//       title,
//       slug,
//       excerpt,
//       date,
//       publication,
//       link,
//       label,
//       logo, // 👈 store URL
//     });

//     const saved = await newItem.save();

//     res.status(201).json({
//       success: true,
//       message: "Journalism added successfully",
//       data: saved,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



// 📥 LIST
export const listJournalism = async (req, res) => {
  try {
    const items = await Journalism.find({});
   

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
export const removeJournalism = async (req, res) => {
  try {
   

    await Journalism.findByIdAndDelete(req.body.id);

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