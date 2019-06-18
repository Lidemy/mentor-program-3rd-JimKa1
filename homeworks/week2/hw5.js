function join(str, concatStr) {
  let n = str[0];
  for(let i = 1; i < str.length; i++){
    
    n += concatStr + str[i];
  }
  
  
  
  return n;
}

function repeat(str, times) {
	let n = "";
  	for(let i = 1 ; i <= times ; i ++ ){
    n += str;
  }
  return n;
  
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
