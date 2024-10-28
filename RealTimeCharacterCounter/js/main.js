const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const clear = document.getElementById('clearBtn');

let charlimit = 51;

counter.innerHTML = `Character Count: 0 / ${charlimit - 1}`;
textarea.maxLength = charlimit - 1;


function inputfunc() {
    counter.innerHTML = `Character Count: ${textarea.value.length} / ${charlimit - 1} `;
    if (textarea.value.length >= charlimit - 1) {
        textarea.style.backgroundColor = 'lightcoral';
        textarea.style.borderColor = 'red';
        counter.style.color = 'red';
    } else {
        textarea.style.backgroundColor = '#fff';
        textarea.style.borderColor = '#ccc';
        counter.style.color = 'black';
    }
}

function clearfunc() {
    textarea.value = '';
    counter.innerHTML = `Character Count: 0 / ${charlimit - 1}`;
    textarea.style.backgroundColor = '#fff';
    textarea.style.borderColor = '#ccc';
    counter.style.color = 'black';
}

textarea.oninput = inputfunc;
clear.onclick = clearfunc;