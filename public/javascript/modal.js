//control modal para registrarse
//configuracion modal iniciar session
var modall = document.getElementById(`modal`)
var closee = document.getElementsByClassName(`modal-close`)[0]
document.getElementById(`abrir`).onclick = function(){
        modall.style.display=`block`
    }
    closee.onclick = function(){
        modall.style.display=`none`
    };

//cerrar sesion
document.getElementById("c").onclick = function (){
    var cena=document.getElementById(`cena`)
    var pedidos =document.getElementById(`especiales`)
    var desayuno=document.getElementById(`desayunos`)
    pedidos.style.display=`none`
    cena.style.display=`block`
    desayuno.style.display=`none`
        cena.innerHTML=`
        <h2 class="title has-text-centered">Cenas</h2>
                    <h2 class="subtitle has-text-centered mt-5">Los favoritos de nuestros clientes </h2>
                    <div class="columns is-centered">
                        <div class="column pl-6 ">
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/1.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        hamburguesas
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/2.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        hamburguesas
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/3.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        hamburguesas
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column pl-6">
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/4.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        hamburguesas
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/5.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        hamburguesas
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/6.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        hamburguesas
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column pl-6">
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/7.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        hamburguesas
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/8.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        hamburguesas
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/9.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        hamburguesas
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        `
}
document.getElementById("d").onclick = function (){
    var cena=document.getElementById(`cena`)
    var pedidos =document.getElementById(`especiales`)
    var desayuno=document.getElementById(`desayunos`)
    pedidos.style.display=`none`
    cena.style.display=`none`
    desayuno.style.display=`block`
        desayuno.innerHTML=`
        <h2 class="title has-text-centered">Desayuno</h2>
                    <h2 class="subtitle has-text-centered mt-5">Los favoritos de nuestros clientes </h2>
                    <div class="columns is-centered">
                        <div class="column pl-6 ">
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/1.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        bebidas
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/2.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        bebidas
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/3.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        bebidas
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column pl-6">
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/4.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        bebidas
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/5.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        bebidas
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/6.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        bebidas
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column pl-6">
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/7.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        Especiales
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/8.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        Especiales
                                    </a>
                                </div>
                            </div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <img src="img/9.jpg" alt="">
                                </figure>
                                <div class="">
                                    <a class="has-text-dark is-size-4 has-text-weight-bold">
                                        Especiales
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        `
}
document.getElementById(`e`).onclick = function(){
    var cena=document.getElementById(`cena`)
    var especiales =document.getElementById(`especiales`)
    var desayuno=document.getElementById(`desayunos`)
    especiales.style.display=`block`
    cena.style.display=`none`
    desayuno.style.display=`none`
}