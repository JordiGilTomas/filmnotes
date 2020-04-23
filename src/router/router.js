const express = require("express");
const controller = require("../controller/controller");

const router = express.Router();

router.get("/", controller.renderMain);
router.get("/buscarPeliculas/:pelicula", controller.buscarPelicula);

module.exports = router;
