
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
  }}





function vaciarCarrito() {
  localStorage.removeItem("carrito");
} 

function calcularTotal(products){

    return products.reduce((acum,product)=>(acum += product.product_price *  quantity),0)
    };
    
    
    let cartRows = document.querySelector(".cartRows")
    
    let products = [];
    if(localStorage.carrito && localStorage.carrito != "[]"){
         let carrito = JSON.parse(localStorage.carrito);
        
         carrito.forEach((product,index)=>{
            fetch(`/api/product/${product.id}`)
            .then( (res)=> res.json())
            .then((product)=>{
                console.log(product);
                if (product) {
                    cartRows.innerHTML += `
                      <tr id="row${index}">
                          <th scope="row">${index + 1}</th>
                          <td class="imagen"><img src=${product.imageUrl}></td>
                          <td>${product.name}</td>
                          <td>$ ${product.product_price}</td>
                          <td> ${product.quantity}</td>
                          <td><button class="btn btn-danger btn-sm" onclick=removeItem(${index})><i class="fas fa-trash"></i></button></td>
                      </tr>            
                      `;
                    products.push({
                      productId: product.product.id,
                      image:product.image,
                      name: product.product_name,
                      price: product.product_price,
                      quantity: product.quantity,
                    });
                  } else {
                    carrito.splice(index, 1); //Borrar 1 item
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                  }
                })

                .then( () => {
                    document.querySelector(".cart-total").innerText = `$ ${calcularTotal(
                      products
                    )}`;
                  }); 
                
            });
            }
 
 
         
        