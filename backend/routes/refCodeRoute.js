import express from "express";
import {
    addRefCode,
  listCode,
  removeCode,
  applyRefCode
} from "../controller/refCodeControll.js";
import multer from "multer";


const codeRouter = express.Router();
const upload = multer();



codeRouter.post("/add", upload.none(), addRefCode)
codeRouter.post("/apply-code", applyRefCode);
codeRouter.get("/list", listCode);
codeRouter.post("/remove", removeCode);

export default codeRouter;

