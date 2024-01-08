const express = require("express");
const router = express.Router();
const crypto = require("crypto");
var user = [
  {
    id: crypto.randomUUID(),
    name: "Subham",
    status: "Completed",
  },
];
router.get("/", (req, res) => {
  console.log(user);
  res.send(user);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const check = user.filter((user) => user.id === id);
  res.send(user);
});

router.post("/", (req, res) => {
  const newUser = [
    {
      id: crypto.randomUUID(),
      name: "Nishant",
      status: "Active",
    },
  ];
  user.push(newUser);
  res.send(user);
});

router.delete("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const check = user.filter((user) => return {user.id != id});
//   res.send(user);
const index = user.findIndex((u) => u.id === (req.params.id));
  if (index === -1) return res.status(404).json({ message: "user not found" });

  user.splice(index, -1);
  res.json({ message: "User deleted" });
});


router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const check = user.filter((user) => user.id === id);
  if (!check) res.status(400).json({ messsage: "Invalid" });
  if (req.body.name) user.name = req.body.name;
  if (req.body.status) user.status = req.body.status;
  res.send(user);
});

module.exports = router;