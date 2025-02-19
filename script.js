//Creamos las constantes del formulario y de cada input en Javascript

const formulario=document.getElementById("formulario");
const usuario=document.getElementById("usuario");
const email=document.getElementById("email");
const password=document.getElementById("password");
const repeatPassword=document.getElementById("repeat-password");
const mostrarPassword=document.getElementById("mostrar-password");
const mostrarPassword2=document.getElementById("mostrar-password2");

//Función para validar los campos del formulario o lanzar una alerta si no son correctos

function validarFormulario(evento){
    const emailRegex=/^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(usuario.value==="" || email.value==="" || password.value==="" || repeatPassword.value===""){
        alert("Debes rellenar todos los campos.");
        evento.preventDefault(); 
        return false;
    }

    if(usuario.value.length<4){
        alert("El usuario debe tener un mínimo de 4 caracteres.");
        usuario.style.border="2px solid red";
        evento.preventDefault(); 
        return false;
    }
    if (!emailRegex.test(email.value)){
        alert("El correo electrónico introducido no es válido.");
        email.style.border="2px solid red";
        evento.preventDefault(); 
        return false;
    }
    if(password.value.length<6 || password.value.length>12){
        alert("La contraseña debe tener entre 6 y 12 caracteres.");
        password.style.border="2px solid red";
        evento.preventDefault(); 
        return formularioValido=false;
    }
    if(password.value!=repeatPassword.value){
        alert("Las contraseñas no coinciden.");
        repeatPassword.style.border="2px solid red";
        evento.preventDefault(); 
        return false;
    }

    return true;
}

//Evento

    formulario.addEventListener ("submit", function (evento){
        validarFormulario(evento);
         
    });

//Para mostrar las contraseñas

function togglePassword(input, button) {
    if (input.type === "password") {
        input.type = "text";
        button.textContent = "Ocultar";
    } else {
        input.type = "password";
        button.textContent = "Mostrar";
    }
}

    mostrarPassword.addEventListener("click", function (e){
        e.preventDefault();
      togglePassword(password, mostrarPassword);
    });

    mostrarPassword2.addEventListener("click", function(e){
        e.preventDefault();
        togglePassword(repeatPassword, mostrarPassword2);
    });
