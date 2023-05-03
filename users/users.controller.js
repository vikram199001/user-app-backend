const express = require("express");

const usersService = require("./users.service");
const router = express.Router();
router.get("/:id", getUserById);
router.post("/", addUser);
router.get("/", getAll);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

module.exports = router;

function addUser(req, res, next) {
  usersService
    .addUser(req.body)
    .then((data) => {
      return res.status(200).send({
        msg: "success",
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

function getAll(req, res, next) {
  usersService
    .getAll(req.body)
    .then((data) => {
      return res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
function getUserById(req, res, next) {
  usersService
    .getUserById(req.params.id)
    .then((data) => {
      console.log("========", data);
      return res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

function updateById(req, res, next) {
  usersService
    .updateById(req.body, req.params.id)
    .then((data) => {
      console.log("========", data);
      return res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

function deleteById(req, res, next) {
  usersService
    .deleteById(req.body, req.params.id)
    .then((data) => {
      console.log("========", data);
      return res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
