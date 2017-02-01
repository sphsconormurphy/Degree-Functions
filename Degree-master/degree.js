const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);
//Code here
function degree(mtrx,v){
  let sum =0;
  let degreelist = mtrx(v-1);

  for(let c = 0; c < degreelist.length; c++){
    sum = sum + degreelist[c];
  }
  return sum;
}

function degreecentrality(mtrx,v){
  let neighbors = mtrx(0).length-1;
  let degreecentrality = degree(mtrx,v)/neighbors;
  return degreecentrality;
}

//Challenge
function king(mtrx){
  let v = 1;
  /*do a for loop that checks the degree centrality of each vertex, starting with 1, and then add it to the king*/

}

//Run test code with ctrl+shift+p  then type in "script"
console.log(degree(A,3));
console.log(degreecentrality(A,2));
