import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";


//function for add product
const addProduct = async (req, res) => {
    try {
      const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;
      console.log("Uploaded Files:", req.files);
  
      // Check if files are being received
      if (!req.files) {
        console.log("No files uploaded.");
        return res.status(400).json({ success: false, message: "No files uploaded." });
      }
  
      const image1 = req.files.image1 && req.files.image1[0];
      const image2 = req.files.image2 && req.files.image2[0];
      const image3 = req.files.image3 && req.files.image3[0];
      const image4 = req.files.image4 && req.files.image4[0];
  
      const images = [image1, image2, image3, image4].filter((item) => item != undefined);
  
      console.log("Filtered Images:", images);
  
      if (images.length === 0) {
        console.log("No valid images found.");
        return res.status(400).json({ success: false, message: "No valid images found." });
      }
  
      let imagesUrl = await Promise.all(
        images.map(async (item) => {
          let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
          return result.secure_url;
        })
      );
  
      console.log("Uploaded Image URLs:", imagesUrl);

      const productData={
        name,
        description,
        category,
        price:Number(price),
        subCategory,
        bestSeller:bestSeller === "true" ? true : false,
        sizes:JSON.parse(sizes),
        image:imagesUrl,
        date:Date.now()
      }

      console.log(productData);

      const product=new productModel(productData);
      await product.save();
  
      res.json({ success: true, message: "Product added successfully.", imagesUrl });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };

//function for list products
const listProducts=async (req,res)=>{
    try {
        
        const products=await productModel.find({});
        res.json({success:true,products});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

//function for remove product
const removeProduct = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.body.id);

        // Check if the product was found and deleted
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.json({ success: true, message: "Product deleted" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

//function for single product info
const singleProduct=async (req,res)=>{
    try {
        
        const {productId}=req.body;
        const product=await productModel.findById(productId);
        res.json({success:true,product});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export {addProduct,listProducts,removeProduct,singleProduct};