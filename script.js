const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const sym = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '='];

const btn = document.getElementById('gen');
const lengthOfPass = document.getElementById('length');
const genPass = document.getElementById('pass');

const text = document.getElementById('text');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');

btn.addEventListener('click', function() {
    let quantityOfCheck = text.checked + symbol.checked + number.checked;
    let k = 3;
    let lengthOfText;
    let lengthOf = Math.floor((lengthOfPass.value / 3) * (k / quantityOfCheck));
    if (lengthOfPass.value % 3 >= 2)
        lengthOfText = Math.ceil((lengthOfPass.value / 3) * (k / quantityOfCheck)) + 1
    else lengthOfText = Math.ceil((lengthOfPass.value / 3) * (k / quantityOfCheck));

    if (lengthOfPass.value == 0) alert('Try ones more'), location.reload();
    if (lengthOfPass.value > 21) alert('Length is over max'), location.reload();

    if (text.checked) {
        for (let i = 0; i < lengthOfText; i++) {
            let randomizer = Math.floor(Math.random() * alphabet.length);
            if (i % 3 == 0) {
                genPass.value += alphabet[randomizer].toUpperCase();
            } else {
                genPass.value += alphabet[randomizer];
            }
        }
    }
    if (symbol.checked) {
        for (let i = 0; i < lengthOf; i++) {
            let randomizer = Math.floor(Math.random() * sym.length);
            genPass.value += sym[randomizer];
        }
    }
    if (number.checked) {
        for (let i = 0; i < lengthOf; i++) {
            let randomizer = Math.floor(Math.random() * num.length);
            genPass.value += num[randomizer];
        }
    }

    let mixed = genPass.value.split('')
        .sort(function() {
            return 0.5 - Math.random()
        }).join('');
    genPass.value = mixed;

});

function copyText() {
    genPass.select();
    document.execCommand("copy");
};