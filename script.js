const box = document.querySelector('#box');

function highlighter() {
    buttonhook.classList.add('highlight');
}

for (let i = 0; i < 256; i++) {
    const pixles = document.createElement('div');

    pixles.classList.add('pixles');
    pixles.setAttribute('id', 'pixles');

    box.appendChild(pixles);

    const button = document.createElement('button');
    button.innerHTML = '';

    button.classList.add('pixlebutton');
    button.setAttribute('id', 'pixlebutton');

    pixles.appendChild(button);

    const buttonhook = document.querySelector('#pixlebutton');
    buttonhook.addEventListener('click', highlighter);
}


