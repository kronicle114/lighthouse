const GRID = [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "v", "", "~", "", "", "", "", ""],
    ["", "v", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "v", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],
];


function countRows(){
    return GRID.length;
}

//countRows();
// print => 10

function countColumns(){
    return GRID[0].length;
}

// countColumns();
// print => 10

function gridSize(){
    return `${countColumns()} x ${countRows()}`;
}

//gridSize();
//print => '10 x 10' 

function totalCells(){
    return GRID.length * GRID[0].length;
}

//totalCells();
//print => 100

const columns = [
  "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J","K","L", "M", "N", 
  "O", "P","Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z"
]
  
function convertColumn(str){
  let currentColumn = str.split("")[0];
  if (columns.includes(currentColumn) === true){
    return columns.indexOf(currentColumn);
  }
}

//convertColumn('A3');
//print column index => 0

const rows = [
  '1', '2', '3', '4', '5',
  '6', '7', '8', '9', '10'
];

function convertRow(str){
  let currentRow = str.split("")[1];
  if (rows.includes(currentRow) === true){
    return rows.indexOf(currentRow);
  }
}

//convertRow('C3');
//print row index => 2

// function lightCell(str){
//     return GRID[convertRow(str)][convertColumn(str)];
// }

//lightCell('C4');
// print the value at C4 => ""

function isRock(str){
    if (lightCell(str) == "^"){
    return true;
    } else {
    return false;
    }
}

//checks if the str has a rock

function isCurrent(str){
    if (lightCell(str) == "~"){
    return true;
    } else {
    return false;
    }
}

//checks if the str has a current

function isShip(str){
    if (lightCell(str) == "v"){
    return true;
    } else {
    return false;
    }
}

//checks if the str has ship

function lightRow(rowNumber){
    let rowIndex = rowNumber - 1;
    return GRID[rowIndex];
}

//lightRow(1);
//will return an array with the entire row

function lightColumn(letter){
    let columnContents = [];
    for (let i = 0; i < GRID.length; i++){
        if (columns.includes(letter) === true){
            let columnIndex = columns.indexOf(letter);
            columnContents.push(GRID[i][columnIndex]);
        }
    }
    return columnContents;
}

//lightColumn('A');
//will return an array w/ entire column => 
// ["", "", "", "", "", "", "", "", "", ""]


//update the lightCell(str)

function lightCell(str){
    if( convertRow(str) <= countRows() && convertColumn(str) <= countColumns() ) {
    return GRID[convertRow(str)][convertColumn(str)];
    } else {
    return false;
    }
}

//lightCell('C4');
//will return the contents of that cell

function indexToChar(i) {
    return String.fromCharCode(i+97).toUpperCase(); //97 in ASCII is 'a', so i=0 returns 'a', i=1 returns 'b', etc
}
//console.log(indexToChar(24))

function allRocks(){
    let rockcoordinates = [];
    for(var i = 0; i < GRID.length; i++){
        for(var j = 0; j < GRID[0].length; j++){
            if(GRID[i][j] == "^"){
                rockcoordinates.push(indexToChar(j)+ (i+1));
            } 
        }
    }
    return rockcoordinates;
}

//allRocks();
//print an array of all cells coordinates with "^" => 
// (9) ["D1", "E3", "F3", "E4", "F4", "B8", "H8", "B9", "B10"]

function allCurrents(){
    let strongCurrents = [];
    for(var i = 0; i < GRID.length; i++){
        for(var j = 0; j < GRID[0].length; j++){
            if(GRID[i][j] == "~"){
                strongCurrents.push(indexToChar(j)+ (i+1));
            }
        }
    }
    return strongCurrents;
}

//allCurrents();
//print an array of all cells coordinates with "~" => 
// (7) ["E2", "C8", "D8", "D9", "E9", "E10", "F10"]

function allShips(){
shipcoordinates=[];
for(var i = 0; i < GRID.length; i++){
  for(var j = 0; j < GRID[0].length; j++){
    if(GRID[i][j] == "v"){
      shipcoordinates.push(indexToChar(j)+ (i+1));
    }
    
  }
}
return shipcoordinates;
}

//allShips();
//print an array of all cells coordinates with "v" => 
// (3) ["C2", "B3", "I5"]

function firstRock(){
let rocks = allRocks();
return rocks[0];
}

//firstRock();
// returns the string of first rock => "D1"


function firstCurrent(){
let currents = allCurrents();
return currents[0];
}

//firstCurrent();
// returns the string of first current => "E2"


function shipReport(){
let ships = allShips();
let firstLastShips = [ships[0], ships[ships.length-1]];
return firstLastShips;
}

//shipReport();
// returns the string coordinate of first & last ship => 
// (2) ["C2", "I5"]

function howDangerous(str){
let a = str.slice(1);
let b = convertColumn(str);
let cell = GRID[a - 1][b];
if (cell === "^") {
  return 100;
} else if (cell === "~") {
  return 50;
} else {
  return 0;
}
}

//howDangerous('C5');
// if the cell does not have a rock or a current, it will return 0


//return an array with two numbers [percentage of rock, percentage of currents] that your GRID has
// should be two decimal points => how to round in JavaScript
function percentageReport(){
  
  
}



[Deprecation] Styling master document from stylesheets defined in HTML Imports is deprecated. Please refer to https://goo.gl/EGXzpw for possible migration paths.
 const GRID = [
      ["", "", "", "^", "", "", "", "", "", ""],
      ["", "", "v", "", "~", "", "", "", "", ""],
      ["", "v", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "v", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "^", "~", "~", "", "", "", "^", "", ""],
      ["", "^", "", "~", "~", "", "", "", "", ""],
      ["", "^", "", "", "~", "~", "", "", "", ""],
    ];
  

function countRows(){
  return GRID.length;
}

//countRows();
// print => 10

function countColumns(){
  return GRID[0].length;
}

// countColumns();
// print => 10

function gridSize(){
  return `${countColumns()} x ${countRows()}`;
}

//gridSize();
//print => '10 x 10'

function totalCells(){
  return GRID.length * GRID[0].length;
}

//totalCells();
//print => 100

const columns = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J","K","L", "M", "N", 
    "O", "P","Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
    ]
    
function convertColumn(str){
    let currentColumn = str.split("")[0];
	if (columns.includes(currentColumn) === true){
		return columns.indexOf(currentColumn);
	}
}

//convertColumn('A3');
//print column index => 0

const rows = [
    '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '10'];

function convertRow(str){
    let currentRow = str.split("")[1];
    if (rows.includes(currentRow) === true){
        return rows.indexOf(currentRow);
    }
}

//convertRow('C3');
//print row index => 2

// function lightCell(str){
//     return GRID[convertRow(str)][convertColumn(str)];
// }

//lightCell('C4');
// print the value at C4 => ""


function isRock(str){
  if (lightCell(str) == "^"){
    return true;
  } else {
    return false;
  }
}

//checks if the str has a rock

function isCurrent(str){
  if (lightCell(str) == "~"){
    return true;
  } else {
    return false;
  }
}

//checks if the str has a current

function isShip(str){
  if (lightCell(str) == "v"){
    return true;
  } else {
    return false;
  }
}

//checks if the str has ship

function lightRow(rowNumber){
  let rowIndex = rowNumber - 1;
  return GRID[rowIndex];
}

//lightRow(1);
//will return an array with the entire row

function lightColumn(letter){
  let columnContents = [];
  for (let i = 0; i < GRID.length; i++){
    	if (columns.includes(letter) === true){
      		let columnIndex = columns.indexOf(letter);
      		columnContents.push(GRID[i][columnIndex]);
      }
  }
	return columnContents;
}

//lightColumn('A');
//will return an array w/ entire column =>
// ["", "", "", "", "", "", "", "", "", ""]


//update the lightCell(str)

function lightCell(str){
  if( convertRow(str) <= countRows() && convertColumn(str) <= countColumns() ) {
    return GRID[convertRow(str)][convertColumn(str)];
  } else {
    return false;
  }
}

//lightCell('C4');
//will return the contents of that cell

function indexToChar(i) {
  return String.fromCharCode(i+97).toUpperCase(); //97 in ASCII is 'a', so i=0 returns 'a', i=1 returns 'b', etc
}
//console.log(indexToChar(24))

function allRocks(){
  rockcoordinates=[];
  for(var i = 0; i < GRID.length; i++){
    for(var j = 0; j < GRID[0].length; j++){
      if(GRID[i][j] == "^"){
        rockcoordinates.push(indexToChar(j)+ (i+1));
      }
      
    }
  }
  return rockcoordinates;
}

//allRocks();
//print an array of all cells coordinates with "^" =>
// (9) ["D1", "E3", "F3", "E4", "F4", "B8", "H8", "B9", "B10"]

function allCurrents(){
  strongCurrents=[];
  for(var i = 0; i < GRID.length; i++){
    for(var j = 0; j < GRID[0].length; j++){
      if(GRID[i][j] == "~"){
        strongCurrents.push(indexToChar(j)+ (i+1));
      }
      
    }
  }
  return strongCurrents;
}

//allCurrents();
//print an array of all cells coordinates with "~" =>
// (7) ["E2", "C8", "D8", "D9", "E9", "E10", "F10"]

function allShips(){
  shipcoordinates=[];
  for(var i = 0; i < GRID.length; i++){
    for(var j = 0; j < GRID[0].length; j++){
      if(GRID[i][j] == "v"){
        shipcoordinates.push(indexToChar(j)+ (i+1));
      }
      
    }
  }
  return shipcoordinates;
}

//allShips();
//print an array of all cells coordinates with "v" =>
// (3) ["C2", "B3", "I5"]

function firstRock(){
  let rocks = allRocks();
  return rocks[0];
}

//firstRock();
// returns the string of first rock => "D1"


function firstCurrent(){
  let currents = allCurrents();
  return currents[0];
}

//firstCurrent();
// returns the string of first current => "E2"


function shipReport(){
  let ships = allShips();
  let firstLastShips = [ships[0], ships[ships.length-1]];
  return firstLastShips;
}

//shipReport();
// returns the string coordinate of first & last ship =>
// (2) ["C2", "I5"]

function howDangerous(str){
  let a = str.slice(1);
  let b = convertColumn(str);
  let cell = GRID[a - 1][b];
  if (cell === "^") {
    return 100;
  } else if (cell === "~") {
    return 50;
  } else {
	return 0;
  }
}

//howDangerous('C5');
// if the cell does not have a rock or a current, it will return 0

function percentageReport(){
  let totalRocks = (allRocks().length / totalCells()) * 100;
  let totalCurrents = (allCurrents().length / totalCells()) * 100;
  return [totalRocks.toFixed(2), totalCurrents.toFixed(2)];
}

//(2) ["9.00", "7.00"]
