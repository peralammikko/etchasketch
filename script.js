function initBoxes() {
    const container = document.querySelector("#container");
    
    const row = 16;
    const col = 16;
    
    for (let i = 0; i < row; i++) {
        let boxRow = document.createElement('div');
        boxRow.classList.add('rowOfBoxes');
        for (let j = 0; j < col; j++) {
            let divBox = document.createElement('div');
            divBox.classList.add('textBox');
            boxRow.appendChild(divBox);
        }
        container.appendChild(boxRow);
    }
}

function initListeners() {
    const boxes = document.querySelectorAll('div.textBox');
    boxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            box.classList.add('painted');
        });
    }); 
}


initBoxes();
initListeners();

