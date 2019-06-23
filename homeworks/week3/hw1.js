// function stars(n) {
//   console.log(n);
// }


function manyStars(n){
  let str='';
  for(let i = 1; i <= n; i ++){
    str = str + "*";
  }
  return str;
}

function stars(x){
  let arr = [];
  for(let i = 1; i <= x; i ++){
    arr.push(manyStars(i));
  }
  return arr;
}



module.exports = stars;
