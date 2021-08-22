function getPin() {
    let pin = Math.round(Math.random() * 10000);

    let pined = pin + '';
    if (pined.length == 4) {
        return pin;
    } else {
        return getPin();
    }

}

function accessPin() {
    let gotPin = getPin();
    let generateInput = document.getElementById('generate-input');
    generateInput.value = gotPin;
    return gotPin;
}

document.getElementById('key-pad').addEventListener('click', function(event) {
    let number = event.target.innerText;

    let keyInput = document.getElementById('key-input');

    // keyInput.value = number;

    if (isNaN(number)) {
        if (number == 'C') {
            keyInput.value = '';
        }

    } else {
        const previousNumber = keyInput.value;

        const newNumber = previousNumber + number;

        keyInput.value = newNumber;

    }

})


document.getElementById('submit').addEventListener('click', function() {
    let submitInput = document.getElementById('generate-input').value;
    let numberInput = document.getElementById('key-input').value;

    let success = document.getElementById('success')
    let fail = document.getElementById('fail')
    if (submitInput == numberInput) {
        success.style.display = 'block';
        fail.style.display = 'none';

    } else {
        fail.style.display = 'block';
        success.style.display = 'none';
    }
})