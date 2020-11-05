


const container = document.getElementById("container");

// Create a (x * y) grid
function makeRows(rows, cols) {
    if (rows <= 100 && cols <= 100) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        for (c = 0; c < (rows * cols); c++) {
            let cell = document.createElement('div');
            container.appendChild(cell).className = "grid-item";
        }
    }else { 
        makeRows(100, 100);
    }
    paint();
}
function clearRows() {
    container.innerHTML = "";
}
makeRows(4,4);

function paint() {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach((cell) => {
        let o = 0.1;


        cell.addEventListener('mouseover', (e) => {
            //console.log(e);
            cell.style.background = `rgb(0,0,0, ${o})`;
            o += 0.1;
            console.log(o);
            console.log(cell.style.background);
        })
    });
}


const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    // let gridSize = getSize();
    // console.log(gridSize);
    let size = parseInt(prompt("Enter desired grid size (MAX SIZE:100)"));
    console.log(size);
    if (!isNaN(size)){
        clearRows();
        makeRows(size, size);
    }
});