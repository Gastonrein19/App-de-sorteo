const maxEntries = 10;

function showOption(option) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('input-area').classList.remove('hidden');
    if (option === 'numbers') {
        document.getElementById('number-section').classList.remove('hidden');
        document.getElementById('name-section').classList.add('hidden');
    } else if (option === 'names') {
        document.getElementById('name-section').classList.remove('hidden');
        document.getElementById('number-section').classList.add('hidden');
    }
}

function addNumberInput() {
    const numberInputs = document.getElementById('number-inputs');
    const input = document.createElement('input');
    input.type = 'number';
    input.classList.add('input-style');
    numberInputs.appendChild(input);
}

function addNameInput() {
    const nameInputs = document.getElementById('name-inputs');
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('input-style');
    nameInputs.appendChild(input);
}

function addNumberRange() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const numberInputs = document.getElementById('number-inputs');
    
    if (start > end) {
        alert('El número inicial no puede ser mayor que el número final.');
        return;
    }

    for (let i = start; i <= end; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.classList.add('input-style');
        input.value = i;
        numberInputs.appendChild(input);
    }
}

function addNameRange() {
    const start = parseInt(document.getElementById('name-start').value);
    const end = parseInt(document.getElementById('name-end').value);
    const nameInputs = document.getElementById('name-inputs');

    if (start > end) {
        alert('El número inicial no puede ser mayor que el número final.');
        return;
    }

    for (let i = start; i <= end; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('input-style');
        input.placeholder = `Nombre ${i}`;
        nameInputs.appendChild(input);
    }
}

function clearNumberInputs() {
    document.getElementById('number-inputs').innerHTML = '';
}

function clearNameInputs() {
    document.getElementById('name-inputs').innerHTML = '';
}

function shuffleAndDisplay() {
    const numbers = Array.from(document.getElementById('number-inputs').children)
        .map(input => input.value)
        .filter(value => value !== '');
    const names = Array.from(document.getElementById('name-inputs').children)
        .map(input => input.value)
        .filter(value => value !== '');

    const combinedArray = [...numbers, ...names];

    if (combinedArray.length === 0) {
        alert('Por favor, ingrese al menos un número o nombre.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * combinedArray.length);
    const result = combinedArray[randomIndex];

    document.getElementById('result').innerText = `Resultado: ${result}`;
    document.getElementById('result').style.display = 'block';
    document.getElementById('reset-button').style.display = 'block';
}

function resetGame() {
    document.getElementById('number-inputs').innerHTML = '';
    document.getElementById('name-inputs').innerHTML = '';
    document.getElementById('result').innerText = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('input-area').classList.add('hidden');
}