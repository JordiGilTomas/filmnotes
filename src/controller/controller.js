const model = require("../model/model");

const renderMain = (req, res) => {
  res.render("index");
};

const buscarPelicula = async (req, res) => {
  const { pelicula } = req.params;
  const result = await model.getMovies(pelicula);
  console.log("result", result);
  res.json(result);
};

module.exports = {
  renderMain,
  buscarPelicula,
};
