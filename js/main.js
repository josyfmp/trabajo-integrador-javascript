document.getElementById("header").innerHTML = `

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="col-md-5 col-5">
             <a class="navbar-brand" href="./index.html">
                <img src="./img/codoacodo.png" alt="Logo" style="width: 95px;">
                Conf Bs As
            </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="col-md-7 col-5 collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" href="#">La conferencia</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Los oradores</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">El lugar y la fecha</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Conviertete en orador</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-success" href="./seccion.html">Comprar tickets</a>
                </li>
            </ul>
        </div>
    </nav>
`

document.getElementById("footer").innerHTML = `

<footer class="row mt-5 justify-content-evenly">
<ul class="nav col-lg-8 col-md-8 col-sm-12 justify-content-between text-center ">
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Preguntas </br> recuentes</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Contáctanos</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Prensa</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Conferencias</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Terminos y </br> condiciones</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Privacidad</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Estudiantes</a>
    </li>
</ul>

</footer>

`

var resultado = document.getElementById("resultado")
var formulario = document.getElementById("formulario")
var tablaDeDescuento = {
    Estudiante:0.80,
    Trainee:0.50,
    Junior:0.15
}

function calcularTotal(cantidad,porcentaje){
    let valorDeEntrada = 200
    let total = (valorDeEntrada * cantidad)
    let descuento = total *porcentaje
    return total - descuento
}

function resumen (){
let cantidad =  parseInt(formulario[3].value)
let categoria = formulario[4].value
resultado.innerHTML =`Total a Pagar: $ ${calcularTotal(cantidad,tablaDeDescuento[categoria])}`

}

function borrar(){
    formulario[0].value=""
    formulario[1].value=""
    formulario[2].value=""
    formulario[3].value=""
    formulario[4].value=""
    resultado.innerHTML=`Total a Pagar`
}
