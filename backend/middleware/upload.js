// import multer from "multer";


// const storage = multer.diskStorage({

//     destination:function (req, file, cb) {
//         const uploadPath = path.join('/tmp', 'uploads');
//         mkdirp.sync(uploadPath); 
//         cb(null, uploadPath);
//       },
      
//     filename:(req, file, cb)=> {
//     // console.log("file--->", file)
//       return cb(null, file.originalname) ////,file.mimetype
//     }
//   })
//   const upload = multer({ storage: storage })
// export default upload;