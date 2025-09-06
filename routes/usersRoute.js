import express from "express";
import User from "../models/userModel.js";

const router = express.Router();


router.post("/login", async(req, res) => {

      const {username , password} = req.body

      try {
          const user = await User.findOne({username , password})
          if(user) {
              res.send(user)
          }
          else{
              return res.status(400).json(error);
          }
      } catch (error) {
        return res.status(400).json(error);
      }
  
});


router.post("/register", async (req, res) => {
    try {
        const { username} = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "User with this username already exists." });
        }

        const newUser = new User(req.body);
        await newUser.save();
        res.send('User registered successfully');
    } catch (error) {
        return res.status(400).json({ error: "Registration Failed,Please try again later." });
    }
});



export default router;

