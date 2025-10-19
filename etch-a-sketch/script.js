const container = document.createElement('div');
container.classList.add('drawing-grid');

const rows = 100;
const columns = 100;
const cellWidth = 100/rows;

for (let i = 0; i < rows * columns; i++) {
    
    const div = document.createElement('div');
    div.classList.add('gridcell');
    div.style.width = `${cellWidth}vw`
    div.style.height = `${cellWidth}vh`

    div.addEventListener('mouseenter', () => {
        div.classList.add('hovered');
    })

    container.appendChild(div);
}

// if gridcell, on hover add .hovered class

document.body.appendChild(container);