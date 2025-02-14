const express=require('express')
var FirstModel = require('./userschema');
const bcrypt = require("bcrypt");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({ message: "API is working!" });
// });


// GET route to fetch all users
router.get('/', async function (req, res) {
    try {
      const list = await FirstModel.find();
      res.send(list);
    } catch (err) {
      console.log('Error fetching data:', err);
      res.status(500).send('Error fetching data');
    }
  });

  // User Signup Route
router.post("/signup", async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new FirstModel({ name, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      res.status(500).json({ error: "Signup failed", details: err.message });
    }
  });



module.exports=router

// routes.js or similar
// const express = require("express");
// const router = express.Router();

// // Test Route: Check if API is working
// router.get("/", (req, res) => {
//   res.json({ message: "API is working!" });
// });

// module.exports = router;