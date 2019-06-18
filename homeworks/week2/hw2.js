function capitalize(str) {

	let arr = str.split("");
 	arr[0] = arr[0].toUpperCase();
  	str = arr.join("");
	return str;
}

console.log(capitalize('hello'));