function isPrime(n) {
  let arr = [];
  for(let i = 1; i <= n; i++){
    if(n % i == 0){
      arr.push(i);
    }
  }
  
  if(arr.length == 2){
    return true;
  }else{
    return false;
  }
  
}

module.exports = isPrime;
