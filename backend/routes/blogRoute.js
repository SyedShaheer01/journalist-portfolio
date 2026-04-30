import express from "express";
import {
  listBlog,
  removeBlog,
} from "../controller/blogControl.js";
import blog from "../modal/blog.js";
import cloudinary from '../config/cloudinary.js'
import path from 'path'
import { mkdirp } from 'mkdirp'
import multer from 'multer'


// import upload from "../middleware/upload.js";

const blogRouter = express.Router();


const storage = multer.diskStorage({

    destination:function (req, file, cb) {
        const uploadPath = path.join('/tmp', 'uploads');
        mkdirp.sync(uploadPath); 
        cb(null, uploadPath);
      },
      
    filename:(req, file, cb)=> {
    // console.log("file--->", file)
      return cb(null, file.originalname) ////,file.mimetype
    }
  })
  const upload = multer({ storage: storage })

// 👇 single image field name = "logo"
blogRouter.post("/add", upload.single("image"),async(req,res)=>{
    const upload= await cloudinary.uploader.upload(req.file.path)
    console.log(upload)

    const blogs = new blog({
        
              title:req.body.title,
              slug:req.body.slug,
              excerpt:req.body.excerpt,
              content:req.body.content,
              image: upload.url
      
          })

          console.log(req.body);

             try {

    const saved = await blogs.save();
            res.status(200).send({
      success: true,
      message: "Blog added successfully",
      data: saved,
    });
              
          } catch (error) {
        res.status(500).send({
        success: false,
        message: error.message,
    });              
          }
      
        })
blogRouter.get("/list", listBlog);

blogRouter.post("/remove", removeBlog);

export default blogRouter;
