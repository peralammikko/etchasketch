const grid = document.querySelector('.grid');
const gridWidth = grid.clientWidth;

createGrid();

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createSquare(sqSize) {
    let divBox = document.createElement('div');
    divBox.classList.add('box');
    divBox.style.width = sqSize;
    divBox.style.height = sqSize;
    divBox.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'black';
    });

    return divBox;
}

function createGrid(size = 16) {
    const squares = size**2;
    for (let i = 0; i < squares; i++) {
        grid.appendChild(createSquare(gridWidth/squares));
    }
}

function resetGrid() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
    });
}

// Reset button init
const resetBtn = document.querySelector('#resetButton');
resetBtn.addEventListener('click', () => {
    resetGrid();
});


// Grid resize button init
const gridBtn = document.querySelector('#setGridButton');
gridBtn.addEventListener('click', () => {
    let gridSize = prompt("Set number of squares in grid (max 100):");
    if (gridSize > 100) {
        alert("Error: Number of squares must be between 1-100");
    } else {
        removeAllChildNodes(grid);
        grid.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`);
        createGrid(gridSize);
    }
});

