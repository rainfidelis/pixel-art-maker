
function getInputs(){
    // Get height and width inputs
    // Pass both variables to the makeGrid function
    const bttn = document.getElementsByTagName('button')[0];

    bttn.addEventListener('click', function(event){
        // First delete any existing table body 
        

        // Record new table values
        row = document.getElementById('inputHeight').value;
        column = document.getElementById('inputWidth').value;
        
        deleteGrid()
        // Make new grid with the collected values
        makeGrid(row, column);
    });
};


function deleteGrid(){
    // Check if a table body (tbody) already exists and remove it
    // Ensures every new table is built from scratch
    if (typeof(document.getElementsByTagName('tbody')[0]) != 'undefined'){
        let grid = document.getElementsByTagName('tbody')[0];
        grid.remove();
    }
}


function makeGrid(row, column) {
    // Create a table according to the grid inputs submitted by the user
    // Only call this function after inputs have been submitted
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


function addColor(){
    // Capture selected color
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
