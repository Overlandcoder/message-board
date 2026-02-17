const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => res.send("new page"));

module.exports = newRouter;
