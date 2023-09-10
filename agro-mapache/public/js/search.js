/* document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("busqueda");
    const searchButton = document.getElementById("buscar");
    const resultados = document.getElementById("resultados");
  
    searchButton.addEventListener("click", () => {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        buscarProductos(searchTerm);
      }
    });
  
    function buscarProductos(query) {
      fetch(`/buscar-productos?query=${query}`)
        .then((response) => response.json())
        .then((data) => {
          resultados.innerHTML = ''; // Limpia los resultados anteriores
          if (data.length === 0) {
            resultados.innerHTML = 'No se encontraron resultados.';
          } else {
            data.forEach((producto) => {
              const productoDiv = document.createElement('div');
              productoDiv.textContent = producto.name;
              resultados.appendChild(productoDiv);
            });
          }
        })
        .catch((error) => {
          console.error('Error al buscar productos:', error);
          resultados.innerHTML = 'Error al buscar productos.';
        });
    }
  }); */