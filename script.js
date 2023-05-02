//Mandamos llamar a todos los formularios de html con el evento document.querySelector
const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#result');

//Mandamos llamar el formulario con el evento addEventListener y le agregamos dos argumentos, el primero es el nombre del evento que queramos ejecutar, en este caso el submit y el segundo para el codigo JS que queremos mandar a llamar cuando suceda este evento, en este caso la funcion sumarImputValues.
form.addEventListener('submit', sumarImputValues);

function sumarImputValues(event) {
    event.preventDefault();
    const sumaImputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaImputs;
}