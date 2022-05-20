const box = document.querySelector('#box');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const pixles = document.createElement('div');
        pixles.classList.add('pixles');
        pixles.setAttribute('id', 'pixles');

        pixles.addEventListener('mouseover', highlighter);
        pixles.addEventListener('mousedown', highlighter);

        box.appendChild(pixles);
    }
}

function highlighter(e) {
    if ('mouseover' && !mouseDown) {
        return
    } else if ('mouseover' && mouseDown) {
        e.target.style.backgroundColor = '#bfbfbf'
    } else {
        return
    }
}

const clear = document.getElementById('clear')
clear.onclick = () => clearGrid()

function clearGrid() {
    box.innerHTML = '';
    createGrid();
}

createGrid()

