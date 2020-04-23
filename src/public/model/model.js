const url = window.location.href;

const getMovies = async (movie) =>
  await (await fetch(`${url}buscarPeliculas/${movie}`)).json();
