//Array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.join(" * ");
console.log(a);

fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);

fruits.splice(0, 1);  
console.log(fruits);

var flowers = ["Lotus", "Rose", "Lili"];
var abc = fruits.concat(flowers);
console.log(abc);

//String

var str = "Please locate where 'Pune' occurs!";
var pos = str.search("locate");
console.log(pos);

console.log(str.slice(7));

console.log(str.substr(7, 6));

console.log(str.substring(7, 13)); 

console.log(str.replace("Pune", "Mumbai"));

var str = "       Hello World  !        ";
console.log(str.trim()); 