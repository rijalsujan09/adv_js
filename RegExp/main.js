// Regular Expression
// Syntax  =>  /pattern/modifiers;
let msg = "Hello World!";
console.log(msg)

let text =  "Visit W3School!";
let  n = text.search("W3School");
console.log(n)

// We can also use search with regular expresion
let m = text.search(/W3School/i);
console.log(m);

// also using with replace() 
let result = msg.replace("World", "Nepal")
console.log(result)
//also
let msg1 = msg.replace(/Hello/i,  "Namestey")
console.log(msg1)

// global matcher with regular expression
let str = "Hello My Name is Sujan Rijal.\nNepal is beautiful country."
let strResult = str.match(/is/g)
console.log(strResult)

// also performs multiple matching
let strResult2 = str.match(/^is/m);
console.log(strResult2,);
