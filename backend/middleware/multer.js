import multer from 'multer';

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    console.log("Uploading file:", file.originalname); // Log the file being uploaded
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;