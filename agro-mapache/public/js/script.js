
 let botonesComprar= document.querySelectorAll(".agregar_carrito");

let cartNumber = document.querySelector(".cart-number");
cartNumber.innerText = productosEnElCarrito();

function productosEnElCarrito() {
        if (localStorage.carrito) {
          return JSON.parse(localStorage.carrito).length;
        } else {
          return 0;
        }
      }

    
      cartNumber.innerText = productosEnElCarrito();


botonesComprar.forEach((boton)=>{
    
    boton.addEventListener("click",(e)=>{
     

        if(localStorage.carrito){
            //
            let carrito = JSON.parse(localStorage.carrito);
            //Busca en el array si hay prodcuto.id que corresponda con el click, si lo encuentra debe dar el id del producto pero de lo contrario, debe dar -1. 
            let index = carrito.findIndex((prod)=>(prod.id === e.target.dataset.id));
            if (index != -1) {
                carrito[index].quantity++;
            } //
            else{
                carrito.push({id:e.target.dataset.id,quantity:1})
            } 
            
            localStorage.setItem("carrito",JSON.stringify(carrito))
        }

        else{
            // si no hay carrito, debemos crear el carrito y le pasamos el array con el primer producto al que se le hace click. 
            localStorage.setItem("carrito", JSON.stringify([{id:e.target.dataset.id,quantity:1}]))
        }
        

        cartNumber.innerText = productosEnElCarrito();
        
    })
})


