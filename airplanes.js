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

let planeCount = 0;
const diffHeadToBody = 3;

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

placePlane(grid, 4, 4, 'south');
placePlane(grid, 3, 10, 'east');
placePlane(grid, 8, 2, 'west');
console.log(grid);