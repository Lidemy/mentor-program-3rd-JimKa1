function alphaSwap(str) {
  let arr = str.split('');
  let str2 = '';
  for(let i = 0; i < arr.length; i++){
    if(arr[i].toString() == arr[i].toString().toUpperCase()){
      str2 += arr[i].toString().toLowerCase();
    }else {
      str2 += arr[i].toString().toUpperCase();
    }
  }
  return str2 ;
}

module.exports = alphaSwap;
