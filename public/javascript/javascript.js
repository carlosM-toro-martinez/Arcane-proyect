//configuracion de navbar

var correo
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});
//observador de firebase para visualizar estado de session
function observador(user){
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var email = user.email;
            correo = user.email
        console.log("Auth: " + email);
        console.log("este es mi correo"+ correo)
        if(correo===`cmtm1996@gmail.com`)
            control_administrador()
        else
            aparece();
        // User is signed in.
            /*
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            */
        // ...
    } else {
        console.log("Usuario no registrado");
        desaparece();
        // User is signed out.
        // ...
    }
    });

}

//control modal para iniciar session
function aparece(){
    var iniciar_session=document.getElementById(`abrir`)
    var pedidos =document.getElementById(`pedidos`)
    var cerrar_sesion=document.getElementById(`cerrar`)
    iniciar_session.style.display=`none`
    cerrar_sesion.style.display=`block`
    pedidos.style.display=`block`
    modall.style.display=`none`
}
function desaparece(){
    var iniciar_session=document.getElementById(`abrir`)
    var pedidos =document.getElementById(`pedidos`)
    var cerrar_sesion=document.getElementById(`cerrar`)
    var admin = document.getElementById(`administrador`)
    admin.style.display=`none`
    iniciar_session.style.display=`block`
    cerrar_sesion.style.display=`none`
    pedidos.style.display=`none`
}
//control modal para registrarse


//configuracion modal iniciar session
var active = document.getElementById(`abrir`)
var modall = document.getElementById(`modal`)
var closee = document.getElementsByClassName(`modal-close`)[0]
    active.onclick = function(){
        modall.style.display=`block`
    }
    closee.onclick = function(){
        modall.style.display=`none`
    };




//registro con firebase
function registro(){
    var email = document.getElementById(`email`).value
    var password = document.getElementById(`contrasena`).value
        correo = document.getElementById(`email`).value
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    console.log(email+` `+password)
}
//cerrar sesion
var cerrar = document.getElementById(`cerrar`)
cerrar.onclick = function (){
    firebase.auth().signOut().then(function(){
        console.log("salio");
        observador('');
    }).catch(function(error){
        console.log("Error");
    });
}
//iniciar sesion
 
var iniciar = document.getElementById(`iniciar`)
iniciar.onclick=function(){
    let email = document.getElementById(`correo`).value
    let password = document.getElementById(`contrasena`).value
    console.log(email+" "+password)
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("usuario invalido")
        // ...
      });
      
}
//controlar administrador
function control_administrador(){
    var iniciar_session=document.getElementById(`abrir`)
    var admin = document.getElementById(`administrador`)
    var cerrar_sesion=document.getElementById(`cerrar`)
    iniciar_session.style.display=`none`
    cerrar_sesion.style.display=`block`
    admin.style.display=`block`
    modall.style.display=`none`
}