function isPalindromes(str) {
  let arr = str.split('');
  let str2 = '';
  for(let i = 0; i < arr.length; i ++){
    str2 += arr[arr.length - i - 1];
  }
  
  if(str == str2){
    return true;
  }else{
    return false;
  }
}
module.exports = isPalindromes;
