

/* const product = document.querySelector(".catalogo-main")
let barra = document.querySelector(".barra-busqueda")
barra.addEventListener("keyup",(e)=>{ 
    console.log(e.target.value)
    if(e.target.matches(".barra-busqueda")){
        product =>{

            product.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?product.classList.remove("filtro")
              :product.classList.add("filtro")

    }
} }) */
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
     
            let carrito = JSON.parse(localStorage.carrito);
            let index = carrito.findIndex((prod)=>(prod.id === e.target.dataset.id));
            if (index != -1) {
                carrito[index].quantity ++;
            }
            else{
                carrito.push({id:e.target.dataset.id,quantity:1})
            }
            localStorage.setItem("carrito",JSON.stringify(carrito))
        }

        else{
            localStorage.setItem("carrito",
            JSON.stringify([{id:e.target.dataset.id,quantity:1}]))
        }

        cartNumber.innerText = productosEnElCarrito();
        
    })
})


