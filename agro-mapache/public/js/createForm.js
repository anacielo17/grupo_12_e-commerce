const nameInp = document.querySelector("#name")
const descriptionInp = document.querySelector("#description")
const priceInp = document.querySelector("#product_price")
const stockInp = document.querySelector("#product_inStock")
const originInp = document.querySelector("#origin")
const brandInp = document.querySelector("#brand_code")
const conditionInp = document.querySelector("#product_condition")
const categoryInp = document.querySelector("#product_category")
const imageInp = document.querySelector("#image")
const errorsList = document.querySelector("#errors")
const submit = document.querySelector("#submit-btn")

const checkErrors = () => {

    let errorsHtml = Array.from(document.querySelectorAll(".error"));
    let errors = [];
    errorsHtml.forEach(error => {
        if (error.innerHTML !== "") {
            errors.push(error.innerHTML)
        }
    });
    if (errors.length > 0) {
        submit.disabled = true;
    } else {
        submit.disabled = false
    }

}
/* const value = e.target.value; */
nameInp.oninput = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;
    
    if (length == 0 && length < 5 /*  value == "" */) {
        e.target.nextElementSibling.innerHTML = "El nombre debe tener al menos 5 caracteres";
    } else {
        e.target.nextElementSibling.innerHTML = ""
    }
    checkErrors();
}

descriptionInp.oninput = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;
    
    if (length < 20 /* value <= 0 */) {
        e.target.nextElementSibling.innerHTML = "La descripcion debe tener al menos 20 caracteres";
    } else {
        e.target.nextElementSibling.innerHTML = ""
    }
    checkErrors();
}
imageInp.oninput = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;
    const acceptedExtensions = ['jpg', 'png', 'jpeg', 'gif'];
    const selectedFile = image.files[0];

    if (selectedFile) {
        const fileName = selectedFile.name;
        const fileExtension = fileName.split('.').pop().toLowerCase();
        if (!acceptedExtensions.includes(fileExtension)) {
        e.target.nextElementSibling.innerHTML = "Extensiones válidas: 'jpg', 'png', 'jpeg', 'gif'";

    }
    else {
        e.target.nextElementSibling.innerHTML = ""
    }
    checkErrors();
} }

