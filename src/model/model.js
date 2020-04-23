const fetch = require("node-fetch");
require("dotenv").config();

const getMovies = async (pelicula) => {
  const result = await (
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY}&language=es-ES&query=${pelicula}&page=1&include_adult=false`
    )
  ).json();
  console.log("Result getMovies", result);
  return result;
};

module.exports = {
  getMovies,
};
