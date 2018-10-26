//
//function percentageReport(){
//    let numCells = totalCells();
//    let numRocks = allRocks().length;
//    let numCurrents = allCurrents().length;
//    let perRocks = (numRocks/numCells*100).toFixed(2);
//    let perCurrents = (numCurrents/numCells * 100).toFixed(2);
//    return [perRocks, perCurrents];
//}
//
////(2) ["9.00", "7.00"]
//
//percentageReport();


//function percentageReport(){
//  let totalRocks = (allRocks().length / 100) * totalCells();
//  let totalCurrents = (allCurrents().length / 100) * totalCells();
//  return [parseFloat(totalRocks.toFixed(2)), parseFloat(totalCurrents.toFixed(2))];
//}
//
////(2) [9, 7]

//this one is incorrect because it is divided by 100 which will not work if the GRID is not 100 cells
//function percentageReport(){
//  let totalRocks = (allRocks().length / 100) * totalCells();
//  let totalCurrents = (allCurrents().length / 100) * totalCells();
//  return [totalRocks.toFixed(2), totalCurrents.toFixed(2)];
//}
//
////(2) ["9.00", "7.00"]


// function percentageReport(){
//   let totalRocks = (allRocks().length / 100) * totalCells();
//   let totalCurrents = (allCurrents().length / 100) * totalCells();
//   return [parseFloat((totalRocks).toFixed(2));
// }
//=> returns 9

// function percentageReport(){
//   let numRocks = (allRocks().length / totalCells()) * 100;
//   let numCurrents = (allCurrents().length / totalCells()) * 100;
//   let totalRocks = Math.floor(numRocks * 100) / 100;
//   let totalCurrents = Math.floor(numCurrents * 100) / 100;
//   return [totalRocks, totalCurrents];
// }

// (2) [9, 7]

// function percentageReport(){
//   let numRocks = (allRocks().length / totalCells()) * 100;
//   let numCurrents = (allCurrents().length / totalCells()) * 100;
//   return [Math.round(numRocks * 100) / 100, Math.round(numCurrents * 100) / 100]
// }

// (2) [9, 7];

// function percentageReport(){
//   let numRocks = (allRocks().length / totalCells()) * 100;
//   let numCurrents = (allCurrents().length / totalCells()) * 100;
//   return Math.round( numRocks * 100)/100;
// }

// returns 9

// function percentageReport(){
//   let numRocks = (allRocks().length / totalCells());
//   let numCurrents = (allCurrents().length / totalCells());
//   return [(Math.round(numRocks * 100) / 100), (Math.round(numCurrents * 100) / 100)]
// }
// //(2) [0.09, 0.07]

// function percentageReport(){
//   let numRocks = (allRocks().length / totalCells()) * 100;
//   let numCurrents = (allCurrents().length / totalCells()) * 100;
//   return [(Math.round(numRocks)), (Math.round(numCurrents))]
// }
// // //(2) [0.09, 0.07]


// function percentageReport(){
//     let numRocks = (allRocks().length / totalCells()) * 100; // 9
//     let numCurrents = (allCurrents().length / totalCells()) * 100; // 7
//     return [Math.round(numRocks * 100) / 100, Math.round(numCurrents * 100) / 100]
// }
//(2) [9, 7]
//
//function percentageReport(){
//  let numRocks = (allRocks().length / totalCells()) * 100;
//  let numCurrents = (allCurrents().length / totalCells()) * 100;
//  return [(Math.round(numRocks.toFixed(2) * 100)/100), (Math.round(numCurrents.toFixed(2) * 100)/100)]
//}
//
//percentageReport();
//
//(2) [9, 7]
