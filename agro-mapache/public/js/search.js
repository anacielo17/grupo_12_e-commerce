function buscarProductos() {
    
    const busqueda = document.getElementById('busqueda').value;

    // Realiza una solicitud GET a tu API con el término de búsqueda
    fetch(`http://localhost:3001/api/products?search=${busqueda}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
        }
        return response.json(); // Intentar parsear la respuesta JSON
    })
    .then(data => {
        try {
            if (Array.isArray(data)) {
                mostrarResultados(data);
            } else {
                console.error('La respuesta de la API no es un array válido:', data);
            }
        } catch (error) {
            console.error('Error al parsear la respuesta JSON:', error);
        }
    })
    .catch(error => console.error('Error en la solicitud:', error));
 }
 function mostrarResultados(resultados) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpia resultados anteriores

    const productos = resultados.products;

    if (Array.isArray(productos) && productos.length > 0) {
        productos.forEach(producto => {
            // Crea elementos HTML para mostrar los resultados (puedes personalizar esto)
            const productoDiv = document.createElement('div');
            productoDiv.textContent = producto.name; // 
            resultadosDiv.appendChild(productoDiv);
        });
    } else {
        resultadosDiv.innerHTML = 'No se encontraron resultados.';
    }
}