import express from "express";
import {
  listBlog,
  removeBlog,
} from "../controller/blogControl.js";
import blog from "../modal/blog.js";
import cloudinary from "../config/cloudinary.js";
import multer from "multer";

const blogRouter = express.Router();

// ✅ MEMORY STORAGE (Vercel friendly)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ADD BLOG
blogRouter.post("/add", upload.single("image"), async (req, res) => {
  try {
    // ❗ check file
    if (!req.file) {
      return res.status(400).send({
        success: false,
        message: "Image is required",
      });
    }

    // ✅ Convert buffer to base64 (Cloudinary upload)
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = "data:" + req.file.mimetype + ";base64," + b64;

    // ✅ Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI);

    // ✅ Save to DB
    const blogs = new blog({
      title: req.body.title,
      slug: req.body.slug,
      excerpt: req.body.excerpt,
      content: req.body.content,
      image: result.secure_url,
    });

    const saved = await blogs.save();

    res.status(200).send({
      success: true,
      message: "Blog added successfully",
      data: saved,
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

blogRouter.get("/list", listBlog);
blogRouter.post("/remove", removeBlog);

export default blogRouter;