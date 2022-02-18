
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  let res = []
  matrix.forEach((chM, ind) =>{
    if ( ind%2 ==0 ){
      chM.forEach(el => res.push(el));
    }
    else{
      for(let i = chM.length-1; i>=0; i--){
        res.push(chM[i]);
      }
    }
  });
  return res;
}
