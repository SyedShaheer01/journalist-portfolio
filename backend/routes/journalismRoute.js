import express from "express";
import {
  listJournalism,
  removeJournalism,
} from "../controller/journalismControl.js";
import Journalism from "../modal/journalism.js";
import cloudinary from '../config/cloudinary.js'
import path from 'path'
import { mkdirp } from 'mkdirp'
import multer from 'multer'


// import upload from "../middleware/upload.js";

const journalismRouter = express.Router();


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
journalismRouter.post("/add", upload.single("logo"),async(req,res)=>{
    const upload= await cloudinary.uploader.upload(req.file.path)
    console.log(upload)

    const journalism = new Journalism({
        
              title:req.body.title,
              slug:req.body.slug,
              excerpt:req.body.excerpt,
              date:req.body.date,
              publication: req.body.publication,
              link: req.body.link,
              label: req.body.label,
              // content:req.body.content,
              logo: upload.url
      
          })

          console.log(req.body);

             try {

    const saved = await journalism.save();
            res.status(200).send({
      success: true,
      message: "Journalism added successfully",
      data: saved,
    });
              
          } catch (error) {
        res.status(500).send({
        success: false,
        message: error.message,
    });              
          }
      
        })
journalismRouter.get("/list", listJournalism);

journalismRouter.post("/remove", removeJournalism);

export default journalismRouter;
