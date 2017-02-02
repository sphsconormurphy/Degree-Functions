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
  let sum = 0;
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
  let kinglist = [];
  let king = 0;
  let list = mtrx(0);
  for(let x = 1; x < list.length + 1; x++){
    if(degreecentrality(mtrx, x)>king){
      kinglist.push(x);
      king = degreecentrality(mtrx,x);
    }
  }
  for(let x = 0; x < kinglist.length; x++){
    if(degreecentrality(mtrx, kinglist[x]) < king){
      kinglist.splice(x,1);
    }
  }
  return kinglist;
}

//Run test code with ctrl+shift+p  then type in "script"
console.log(degree(A,3));
console.log(degreecentrality(A,2));
console.log(king(A));
