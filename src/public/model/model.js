const getMovies = async (movie) =>
  await (await fetch(`http://localhost:3000/buscarPeliculas/${movie}`)).json();
