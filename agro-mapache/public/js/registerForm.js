const nameInp = document.querySelector("#name")
const lastNameInp = document.querySelector("#lastName")
const emailInp = document.querySelector("#email")
const phoneInp = document.querySelector("#phone")
const passwordInp = document.querySelector("#password")
const confirmPasswordInp = document.querySelector("#confirmPassword")
const countryInp = document.querySelector("#country")
const genderInp = document.querySelector("#gender")
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
    if (value === "") { e.target.nextElementSibling.innerHTML = "El nombre no puede quedar vacio" }
    else if (length < 2 /*  value == "" */) {
        e.target.nextElementSibling.innerHTML = "El Nombre debe tener al menos 2 caracteres";
    } else {
        e.target.nextElementSibling.innerHTML = ""
    }
    checkErrors();
}

lastNameInp.oninput = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;

    if (value === "") { e.target.nextElementSibling.innerHTML = "El Apellido  no puede quedar vacio" }
    else if (length < 2 /* && value <= 0 */) {
        e.target.nextElementSibling.innerHTML = "El apellido debe tener al menos 2 caracteres";
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
    }
}
emailInp.oninput = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;
    const isEmailCorrect = e.target.value.includes("@") && e.target.value.includes(".")
    if (value === "") { e.target.nextElementSibling.innerHTML = "El email  no puede quedar vacio" }
    else if (!isEmailCorrect) {
        e.target.nextElementSibling.innerHTML = "El email es invalido'";
    } else {
        e.target.nextElementSibling.innerHTML = ""
    }
}

passwordInp.oninput = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;
    if (value === "") { e.target.nextElementSibling.innerHTML = "La contraseña  no puede quedar vacio" }
    else if (length < 8 /* && value <= 0 */) {
        e.target.nextElementSibling.innerHTML = "La contraseña debe tener al menos 8 caracteres";
    } else if (!/[A-Z]/.test(password.value)) {
        e.target.nextElementSibling.innerHTML = "La contraseña debe contener al menos una letra mayúscula";
    }
    else {
        e.target.nextElementSibling.innerHTML = ""
    }
    checkErrors();
}
confirmPasswordInp.oninput = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;
    if (value === "") { e.target.nextElementSibling.innerHTML = "Debes confirmas la contraseña" }
    else if (confirmPasswordInp.value !== password.value) {
        e.target.nextElementSibling.innerHTML = "Las contraseñas no coinciden";
    }
    else {
        e.target.nextElementSibling.innerHTML = ""
    }
    checkErrors();
}
phoneInp.oninput = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;
    if (value === "") {
        e.target.nextElementSibling.innerHTML = "El numero no puede quedar vacio"
    }
     else if (length < 8 ) {
        e.target.nextElementSibling.innerHTML = "El numero debe tener al menos 8 caracteres";
    } 
    else if (!/\d{8,12}$/.test(phoneInp.value)) {
        e.target.nextElementSibling.innerHTML = "Debe contener solo numeros";
    } else {
        e.target.nextElementSibling.innerHTML = ""
    }
    checkErrors();
}