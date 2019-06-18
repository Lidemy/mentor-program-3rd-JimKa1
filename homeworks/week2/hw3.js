function reverse(str) {
  
  let arr = str.split("");
  let arr2 = [];
  for(let i = 0;i < arr.length; i++){
    arr2[i] = arr[arr.length - i -1];
  }
  str = arr2.join("");
  console.log(str);
  return str;
}

reverse('hello');