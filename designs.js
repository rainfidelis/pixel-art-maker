/**
 * @desc Get user inputs for creating the grid and 
 * pass it on to the makeGrid functions.
 * Deletes the existing grid first before creating a new one.
 */
function getInputs(){
    
    const bttn = document.getElementsByTagName('button')[0];

    bttn.addEventListener('click', function(event){
        // First delete any existing table body 
        deleteGrid()

        // Record new table values
        row = document.getElementById('inputHeight').value;
        column = document.getElementById('inputWidth').value;
        
        // Make new grid with the collected values
        makeGrid(row, column);
    });
};


/**
 * @desc Check if a table body (tbody) already exists and remove it
 * Ensures every new table is built from scratch
 */
function deleteGrid(){
    
    if (typeof(document.getElementsByTagName('tbody')[0]) != 'undefined'){
        let grid = document.getElementsByTagName('tbody')[0];
        grid.remove();
    }
}


/**
 * @desc Create a grid according to the user's inputs
 * @param int $row - number representing the number of vertical squares in the grid
 * @param int $column - number representing the number of horizontal squares in the grid
 */
function makeGrid(row, column) {
    let canvas = document.getElementById('pixelCanvas');
    
    for (i = 1; i <= row; i++){
        let newRow = canvas.insertRow()
        let rowCell = newRow.insertCell()
    }

    for (i = 0; i < canvas.rows.length; i++){
        let row = canvas.rows[i]
        for (j = 1; j < column; j++){
            let newColumn = row.insertCell(-1)
        }
    }
}


/**
 * @desc Listens when a user selects a color and records the selected color
 * Sets the background color for any grid clicked by a user to the selected color.
 */
function addColor(){
    const picker = document.getElementById('colorPicker');
    var color = '';

    picker.addEventListener('input', function(){
        color = picker.value;
    });

    // Add background color on click
    var tbl = document.getElementById('pixelCanvas')
    tbl.addEventListener('click', function(evt){
        if (evt.target.nodeName === 'TD') {
            evt.target.bgColor = color;
        }
    });
}

getInputs();
addColor();
