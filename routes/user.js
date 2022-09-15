const express = require("express");
const User = require("../models/user");
const userRouter = express.Router();

//get all users

userRouter.get("/all", async (req, res) => {
  try {
    let result = await User.find();
    res.send({
      users: result,
      msg: "all users",
    });
  } catch (error) {
    console.log(error);
  }
});

//add new user

userRouter.post("/add", async (req, res) => {
  try {
    let newUser = new User(req.body);
    const result = await newUser.save();
    res.send({ result: result, msg: "user added" });
  } catch (error) {
    console.log(error);
  }
});

//update user by id

userRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
    );
    res.send({ newUser: result, msg: "user updated" });
  } catch (error) {
    console.log(error);
  }
});

//delet user by id
userRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.send({ msg: "user is delete" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
