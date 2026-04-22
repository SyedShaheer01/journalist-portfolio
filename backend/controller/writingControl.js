import copyWriting from "../modal/copyWriting.js";

export const addCopyWriting = async (req, res) => {
  try {
    const { title, slug, type, excerpt, content } = req.body;

    console.log("Incoming Data:", req.body);

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const writing = new copyWriting({
      title: title.trim(),   // extra safety
      slug,
      type,
      excerpt,
      content
    });

    const savedData = await writing.save();

    res.status(200).json({
      success: true,
      message: "CopyWriting added successfully",
      data: savedData,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const listCopy = async (req, res) => {
  try {
    const items = await copyWriting.find({});
   

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
export const removeCopy = async (req, res) => {
  try {
   

    await copyWriting.findByIdAndDelete(req.body.id);

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
