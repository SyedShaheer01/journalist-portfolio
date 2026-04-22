import express from "express";
import {
    addCopyWriting,
  listCopy,
  removeCopy,
} from "../controller/writingControl.js";
import multer from "multer";


const writingRouter = express.Router();
const upload = multer();



writingRouter.post("/add", upload.none(), addCopyWriting)
writingRouter.get("/list", listCopy);
writingRouter.post("/remove", removeCopy);

export default writingRouter;

