
function requestInput() {
    while(true) {
        let input = prompt("Ingresa un numero porfavor: ");

        let number = undefined;
        number = parseFloat(input);

        if(!Number.isNaN(number)) {
            let result = calculateFactorial(number);
            alert("El resultado es: " + result);
            break;
        }
    }
}

function calculateFactorial(number) {
    let result = 1;

    for(let i = number; i > 0; i--) {
        result *= i;
    }

    return result;
}

requestInput();