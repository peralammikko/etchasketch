function initBoxes(squares = 16) {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    
    for (let i = 0; i < squares; i++) {
        let boxRow = document.createElement('div');
        boxRow.classList.add('rowOfBoxes');
        for (let j = 0; j < squares; j++) {
            let divBox = document.createElement('div');
            divBox.classList.add('textBox');
            boxRow.appendChild(divBox);
        }
        container.appendChild(boxRow);
    }
    initBoxListeners();
}

function initBoxListeners() {
    const boxes = document.querySelectorAll('div.textBox');
    boxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            box.classList.add('painted');
        });
    }); 
}

function resetGrid() {
    const boxes = document.querySelectorAll('.painted');
    boxes.forEach(box => {
        box.classList.remove('painted');
    })
}

function initButtons() {
    const resetBtn = document.querySelector('#resetButton');
    const gridBtn = document.querySelector('#setGridButton');
    
    resetBtn.addEventListener('click', () => {
        resetGrid();
    });
    
    gridBtn.addEventListener('click', () => {
        let setSquares = prompt("Set number of squares in grid (max 100):");
        if (setSquares > 100) {
            alert("Error: Number of squares must be between 1-100");
        } else {
            initBoxes(setSquares);
        }
    });
}

initBoxes();
initButtons();
