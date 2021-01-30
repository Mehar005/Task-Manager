const express = require("express");
const router = express.Router();
const User = require("../models/userModal");

// Api to get all users
router.get("/", (req, res) => {
  User.find()
    .then((result) => res.json(result))
    .catch((error) => res.status(404).json(error.message));
});

//Api to post new user
router.post("/add", (req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("user added"))
    .catch((error) => res.status(404).json("Error: " + error));
});

// Api to update user
router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((result) => {
      result.username = req.body.username ? req.body.username : result.username;

      result
        .save()
        .then(() => res.json("user updated"))
        .catch((error) => res.status(404).json(error.message));
    })
    .then((err) => res.json(err.message));
});

module.exports = router;
