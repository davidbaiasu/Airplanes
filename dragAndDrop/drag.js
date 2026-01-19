const tableElement = document.getElementById('id_table');
const planeElement = document.getElementById('id_img_plane');
const parkDiv = document.getElementById('id_div_park');

const ROWS = 10;
const COLS = 10;
let isFollowing = false;

// 1. Click the grey box to pick up the plane
parkDiv.addEventListener('click', (e) => {
    isFollowing = true;
    
    // Move it immediately to where you clicked so it doesn't "jump" from (0,0)
    movePlane(e.pageX, e.pageY);
});

window.addEventListener('keydown', (event) => {
	
	if( event.key === 'r' || event.key === 'R' ){
		rotatePlane();
	}
	
});

let rotation = 0;

function rotatePlane() {
    rotation = (rotation + 90) % 360;
    planeElement.style.transform = `rotate(${rotation}deg)`;
}

// 2. Follow the mouse
document.addEventListener('mousemove', (e) => {
    if (isFollowing) {
        movePlane(e.pageX, e.pageY);
    }
});

// Helper function to handle the math
function movePlane(x, y) {
    const offsetX = planeElement.offsetWidth * 0.5;
    const offsetY = planeElement.offsetHeight * 0.4;
    planeElement.style.left = (x - offsetX) + 'px';
    planeElement.style.top = (y - offsetY) + 'px';
}

createHTMLTable(tableElement, ROWS, COLS);

function createHTMLTable(tableElement, ROWS, COLS){
    for( let i = 1; i <= ROWS; i++ ){
        let newRow = document.createElement('tr');
        for( let j = 1; j <= COLS; j++ ){
            let newCell = document.createElement('td');
            newCell.id = `id_cell_${i}_${j}`;
            newCell.classList.add("cell");
            newCell.innerHTML = '0';
            newRow.appendChild(newCell);
        }
        tableElement.appendChild(newRow);
    }
}