const ROWS = 10;
const COLS = 10;
const diffHeadToBody = 3;

let grid = [

	[0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0]

];

const colorMap = {
	
	0: "white",
	1: "darkred",
	2: "darkblue",
	3: "darkgreen",
	4: "red",
	5: "blue",
	6: "green"
	
};

let planeCount = 0;

/*
	plane1: head: 1
			body: 4
	plane2: head: 2
			body: 5
	plane3: head: 3
			body: 6

*/

function placePlane(grid, i, j, dir){
	
	planeCount++;
	grid[i][j] = planeCount;
	let bodyValue = planeCount + diffHeadToBody;
	
	switch(dir){
		
		case 'north':
		
			for( let k = j - 2; k <= j + 2; k++ ){
				grid[i+1][k] = bodyValue;
			}
			grid[i+2][j] = bodyValue;
			for( let k = j - 1; k <= j + 1; k++ ){
				grid[i+3][k] = bodyValue;
			}
			break;
			
		case 'east':
			
			for( let k = i - 2; k <= i + 2; k++ ){
				grid[k][j-1] = bodyValue;
			}
			grid[i][j-2] = bodyValue;
			for( let k = i - 1; k <= i + 1; k++ ){
				grid[k][j-3] = bodyValue;
			}
			break;
			
		case 'south':
			
			for (let k = j - 2; k <= j + 2; k++){ 
				grid[i - 1][k] = bodyValue;
			}
			grid[i - 2][j] = bodyValue;
			for (let k = j - 1; k <= j + 1; k++){
				grid[i - 3][k] = bodyValue;
			}
			break;
			
		case 'west':
		
			for (let k = i - 2; k <= i + 2; k++){
				grid[k][j + 1] = bodyValue;
			}
			grid[i][j + 2] = bodyValue;
			for (let k = i - 1; k <= i + 1; k++){
				grid[k][j + 3] = bodyValue;
			}
			break;
			
		default:
			console.log("Error: placePlane() unknown direction");
	}
	
}

function unplacePlane(grid, i, j, dir) {
	
	grid[i][j] = 0;
	
	switch(dir) {
		
		case 'north':
			for (let k = j - 2; k <= j + 2; k++) {
				grid[i + 1][k] = 0;
			}
			grid[i + 2][j] = 0;
			for (let k = j - 1; k <= j + 1; k++) {
				grid[i + 3][k] = 0;
			}
			break;
			
		case 'east':
			for (let k = i - 2; k <= i + 2; k++) {
				grid[k][j - 1] = 0;
			}
			grid[i][j - 2] = 0;
			for (let k = i - 1; k <= i + 1; k++) {
				grid[k][j - 3] = 0;
			}
			break;
			
		case 'south':
			for (let k = j - 2; k <= j + 2; k++) {
				grid[i - 1][k] = 0;
			}
			grid[i - 2][j] = 0;
			for (let k = j - 1; k <= j + 1; k++) {
				grid[i - 3][k] = 0;
			}
			break;
			
		case 'west':
			for (let k = i - 2; k <= i + 2; k++) {
				grid[k][j + 1] = 0;
			}
			grid[i][j + 2] = 0;
			for (let k = i - 1; k <= i + 1; k++) {
				grid[k][j + 3] = 0;
			}
			break;
	}
	
	planeCount--; 
}

function isValidPlanePlacement(grid, i, j, dir){ // boolean

	if ( i < 1 || i > 10 || j < 1 || j > 10 ){
		return false;
	}

	if ( grid[i][j] != 0 )
		return false;

	switch (dir){

		case 'north':
		
			if ( i > 7 || j < 3 || j > 8 )
				return false;

			for ( let k = j - 2; k <= j + 2; k++ ) {
				if ( grid[i + 1][k] != 0 )
					return false;
			}
			if ( grid[i + 2][j] != 0 )
				return false;
			for ( let k = j - 1; k <= j + 1; k++ ) {
				if ( grid[i + 3][k] != 0 )
					return false;
			}
			break;

		case 'south':
		
			if ( i < 4 || j < 3 || j > 8 )
				return false;

			for ( let k = j - 2; k <= j + 2; k++ ) {
				if ( grid[i - 1][k] != 0 )
					return false;
			}
			if ( grid[i - 2][j] != 0 )
				return false;
			for ( let k = j - 1; k <= j + 1; k++ ) {
				if ( grid[i - 3][k] != 0 )
					return false;
			}
			break;

		case 'east':
		
			if ( j < 4 || i < 3 || i > 8 )
				return false;

			for ( let k = i - 2; k <= i + 2; k++ ) {
				if ( grid[k][j - 1] != 0 )
					return false;
			}
			if ( grid[i][j - 2] != 0 )
				return false;
			for ( let k = i - 1; k <= i + 1; k++ ) {
				if ( grid[k][j - 3] != 0 )
					return false;
			}
			break;

		case 'west':
		
			if ( j > 7 || i < 3 || i > 8 )
				return false;

			for ( let k = i - 2; k <= i + 2; k++ ) {
				if ( grid[k][j + 1] != 0 )
					return false;
			}
			if ( grid[i][j + 2] != 0 )
				return false;
			for ( let k = i - 1; k <= i + 1; k++ ) {
				if ( grid[k][j + 3] != 0 )
					return false;
			}
			break;

		default:
			console.log("Error: placePlane() unknown direction");
			return false;
	}

	return true;
}

//-----------------------------------------------------------

function createHTMLTable(){
	
	const tableElement = document.getElementById('id_table');

	for( let i = 1; i <= ROWS; i++ ){
		
		let newRow = document.createElement('tr');
		
		for( let j = 1; j <= COLS; j++ ){
				
			let newCell = document.createElement('td');
			newCell.id = `id_cell_${i}_${j}`;
			newCell.classList.add("cell");
			newRow.appendChild(newCell);
			
		}
		
		tableElement.appendChild(newRow);
		
	}
	
}

function updateHTMLTable(grid){
	
	for( let i = 1; i <= ROWS; i++ ){
		for( let j = 1; j <= COLS; j++ ){
			const cell = document.getElementById(`id_cell_${i}_${j}`);
			cell.style.backgroundColor = colorMap[grid[i][j]];
		}
	}
	
}

//-----------------------------------------------------------

createHTMLTable();
updateHTMLTable(grid);

//-----------------------------------------------------------

const directions = ['north', 'east', 'south', 'west'];

let result = [];
let state = [];

function backtrack(grid, directions, result){
	
	if (result.length >= 10) return;
	
	if( planeCount == 3 ){
		result.push(grid.map(row => [...row]));
		console.log(":D");
	}
	
	for( let i = 1; i <= ROWS; i++ ){
		
		for( let j = 1; j <= COLS; j++ ){
			
			for( let k = 0; k < directions.length; k++ ){
				
				if( isValidPlanePlacement(grid, i, j, directions[k]) ){
					
					placePlane(grid, i, j, directions[k]);
					
					backtrack(grid, directions, result);
					
					unplacePlane(grid, i, j, directions[k]);
					
					
				}
			
			}
		
		}
		
	}
	
}

backtrack(grid, directions, result);
console.log(result);

//-----------------------------------------------------------

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function showResultOnScreen(result){
	
	for( let i = 0; i < result.length; i++ ){
		updateHTMLTable(result[i]);
		await sleep(100);
	}	
	
}

showResultOnScreen(result);

//-----------------------------------------------------------

function printToFile(content) {
    const fileOutput = document.getElementById('fileOutput');
    
    // If it's a matrix (array of arrays), format it nicely
    if (Array.isArray(content)) {
        content = content.map(row => row.join(' ')).join('\n');
    }
    
    // Add the content to the box (like appending to a file)
    fileOutput.innerText += content + "\n---\n";
}

//-----------------------------------------------------------
