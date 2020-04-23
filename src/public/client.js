const btnBuscar = document.getElementById("btnBuscar");
const inputBuscar = document.getElementById("inputBuscar");
const peliculasContainer = document.getElementById("peliculasContainer");
const buscarPelicula = async () => {
  const nombre = inputBuscar.value;
  const { results } = await getMovies(nombre);
  const template = Handlebars.templates["peliculas.hbs"];
  peliculasContainer.innerHTML = template({ results });
};

btnBuscar.addEventListener("click", buscarPelicula);
