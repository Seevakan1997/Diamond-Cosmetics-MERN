const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB

mongoose.connect("mongodb+srv://Seevakan:Seevakan1997@cluster0.l6dj6ha.mongodb.net/e-commerce");

// API creation

app.get("/",(req,res)=>{
    res.send("Express App is Running...");
})

// Image storage

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server is Running on port " +port);
    }
    else{
        console.log("Error"+error);
    }
})