
function removeItem(index) {
  let carrito = JSON.parse(localStorage.carrito);
  if (carrito.length >= 1) {
    carrito.splice(index, 1);
    products.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById(`row${index}`).remove();
  } else {
    localStorage.removeItem("carrito");
    products = [];

    cartNumber.innerText = productosEnElCarrito();
  }
}


function vaciarCarrito() {
  localStorage.removeItem("carrito");
}


let cartRows = document.querySelector(".cartRows")
let total = 0;
let products = [];
//Si tenemos localStorage, traigo el carrito
if (localStorage.carrito && localStorage.carrito != "[]") {
  let carrito = JSON.parse(localStorage.carrito);

  carrito.forEach((product, index) => {
    const quantity = product.quantity;
    fetch(`/api/product/${product.id}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        if (product) {
          cartRows.innerHTML += `
                      <tr id="row${index}">
                          <th scope="row">${index + 1}</th>
                          <td class="imagen"><img src=${product.imageUrl}></td>
                          <td>${product.name}</td>
                          <td>$ ${product.product_price}</td>
                          <td class= "text-center"> ${quantity}</td>
                          <td class= "text-center">$${parseFloat(product.product_price * quantity)}</td>
                          <td><button class="btn btn-danger btn-sm" onclick=removeItem(${index})><i class="fas fa-trash"></i></button></td>
                      </tr>            
                      `;
          const subtotal = parseFloat(product.product_price) * quantity; // Calcula el subtotal para este producto
          total += subtotal; // Suma el subtotal al total global
          products.push({
            productId: product.product_id,
            image: product.image,
            name: product.product_name,
            price: product.product_price,
            quantity: quantity,
          });
        } else {
          carrito.splice(index, 1); //Borrar 1 item
          localStorage.setItem("carrito", JSON.stringify(carrito));
        }
      })

      .then(() => {
        if (typeof total === 'number' && !isNaN(total)) { // Verifica si total es un número válido
          document.querySelector(".cart-total").innerText = `$ ${total.toFixed(2)}`;
        } else {
          document.querySelector(".cart-total").innerText = `$ 0.00`;
        }
        console.log(total);
      });

  });
}
console.log(localStorage.carrito)
const cart = JSON.parse(localStorage.carrito);
console.log(cart);
// Realizar una solicitud POST al servidor con los datos del carrito
fetch('/checkout', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    paymentMethod: paymentMethod,
    ship_adress: ship_adress,
    cart: cart, // Envía el carrito como parte de la solicitud POST
  }),
})
  .then((response) => response.json())
  .then((data) => {
    // Manejar la respuesta del servidor aquí
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });






/* 
 const checkoutForm = document.querySelector('#checkoutCart'); */

// Agrega un escuchador de eventos para el envío del formulario
/* checkoutForm.addEventListener('submit', async (event) => {
  event.preventDefault(); */

  // Aquí puedes agregar un console.log para verificar los datos antes de enviar la solicitud POST.
 /*  console.log('Datos del formulario antes de enviar la solicitud POST:', {
    customer_id: document.querySelector('#customer_id').value, 
    ship_adress: document.querySelector('#ship_adress').value,
    paymentMethod: document.querySelector('#paymentMethod').value,
  });
});  */