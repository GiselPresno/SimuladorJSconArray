let nombre = prompt("Ingrese su nombre:")

function Product(id, name, price) {
    this.id = id
    this.name = name
    this.price = price
}

let product1 = new Product(100, "traducción", 10)
let product2 = new Product(200, "transcripción", 200)
let product3 = new Product(300, "subtitulado", 220)

let servicio = parseInt(prompt("¡Bienvenid@, "+nombre +"! Ingrese por favor el código del servicio a solicitar (100 para traducciones, 200 para transcripciones y 300 para subtitulados):"))

if (servicio === product1.id) {
    let palabras = prompt("Indique por favor la cantidad aproximada de palabras a traducir:")

    let resultado = calculadora( palabras, 10, "*")

    alert("El presupuesto aproximado sería de " + resultado + " pesos.")

    function calculadora(primerNumero, segundoNumero, operacion) {
        switch (operacion) {
            case "+":
                return primerNumero + segundoNumero;
                break;
            case "-":
                return primerNumero - segundoNumero;
                break;
            case "*":
                return primerNumero * segundoNumero;
                Break;

            case "/":
                return primerNumero / segundoNumero;
                break;
            default:
                return 0;
                break;
        }
    }
}else if (servicio === product2.id) {
    let palabras = prompt("Indique por favor la cantidad aproximada de minutos a transcribir:")

    let resultado = calculadora( palabras, 200, "*")

    alert("El presupuesto aproximado sería de " + resultado + " pesos.")

    function calculadora(primerNumero, segundoNumero, operacion) {
        switch (operacion) {
            case "+":
                return primerNumero + segundoNumero;
                break;
            case "-":
                return primerNumero - segundoNumero;
                break;
            case "*":
                return primerNumero * segundoNumero;
                Break;

            case "/":
                return primerNumero / segundoNumero;
                break;
            default:
                return 0;
                break;
        }
    }
}else if(servicio === product3.id) {
    let palabras = prompt("Indique por favor la cantidad aproximada de minutos a subtitular:")

    let resultado = calculadora( palabras, 220, "*")

    alert("El presupuesto aproximado sería de " + resultado + " pesos.")

    function calculadora(primerNumero, segundoNumero, operacion) {
        switch (operacion) {
            case "+":
                return primerNumero + segundoNumero;
                break;
            case "-":
                return primerNumero - segundoNumero;
                break;
            case "*":
                return primerNumero * segundoNumero;
                Break;

            case "/":
                return primerNumero / segundoNumero;
                break;
            default:
                return 0;
                break;
        }
    }
}else {
    prompt("Código incorrecto. Intente nuevamente por favor (100 para traducciones, 200 para transcripciones y 300 para subtitulados):")
}

console.log(resultado)