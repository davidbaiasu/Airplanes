let localSolutions = allWays;

function removeDuplicateSolutions(matrixArray) {
	
    const stringified = matrixArray.map(m => {
        const normalized = m.map(row => 
            row.map(cell => cell > 0 ? 1 : 0)
        );
        return JSON.stringify(normalized);
    });
    
    const uniqueStrings = [...new Set(stringified)];
	
	return uniqueStrings;

}

let setSolutions = removeDuplicateSolutions(localSolutions);

function filterSolutions(localSolutions, row, col, val){
	
	let auxMatrix = [];
	
	if( val === 'miss' ){
		
		auxMatrix = localSolutions.filter(g => g[row][col] === 0);
		
	}
	else if( val === 'head' ){
		
		auxMatrix = localSolutions.filter(g => g[row][col] > 0 && g[row][col] < 4);
		
	}
	
	else if( val === 'hit' ){
		
		auxMatrix = localSolutions.filter(g => g[row][col] > 3 && g[row][col] < 7);
	
	}
	
	return auxMatrix;
	
	
}

localSolutions = filterSolutions(localSolutions, 4, 4, 'miss');
localSolutions = filterSolutions(localSolutions, 3, 5, 'hit');
localSolutions = filterSolutions(localSolutions, 5, 9, 'head');
localSolutions = filterSolutions(localSolutions, 1, 2, 'hit');
localSolutions = filterSolutions(localSolutions, 7, 1, 'head');
localSolutions = filterSolutions(localSolutions, 3, 1, 'hit');
localSolutions = filterSolutions(localSolutions, 4, 3, 'head');
