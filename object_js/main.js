// java script can also contain multiple values

let person = {firstName:"Sujan Rijal", age:24, job:"Java .Dev"}
console.log(person)
console.log(typeof(person))

// javaScript object is the collection of named values

// we can also create object with new keyword

const employee = new Object();
employee.firstName = "John";
employee.lastName = "Doe";
employee.age = 24;
employee.role = "Java .Dev";

console.log(employee)

// javascript objecta rae mutable
const x = person;
x.age = 25;

console.log(person)
// delete employee.age;

// javaScript for in loop

for(let i in employee){
    console.log(i, "=>",employee[i])
}

person.age = 24;

person.obj = employee;
console.log(person)

console.log(person.obj.firstName,person.obj.lastName,person.obj.age)

// Using Json.stringify() method

let myInfo = JSON.stringify(employee);

const arry = Object.values(employee)
console.log(myInfo)

console.log(arry)
let  myInfo1 = JSON.stringify(arry);
console.log(myInfo1)


//===============================================================
{
    // function getter and setter
    const myEmployee = {
        firstName: "",
        lastName: "",
        age:24,
        role: "Senior .Dev",

        get fullName(){
            return this.firstName+" "+this.lastName;
        },
        set fName(fName){
            this.firstName = fName;
        },
        set lName(lName){
            this.lastName = lName;
        }
    }
    myEmployee.fName = "Sujan";
    myEmployee.lName = "Rijal";

    console.log(myEmployee.fullName, " => ", myEmployee.role)

}

//===============================================================
{
const obj = {counter : 0};
// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.multiply;
obj.decrement;

console.log(obj.counter)

}


//========== let use call ========================
{
  const person = {
    fullName: function(address, salary){
      return this.firstName+" "+this.lastName+ " => "+ address + " , "+salary;
    }
  }
  const person1 ={
    firstName : "Sujan",

    lastName : "Rijal"
  }
  const person2 ={
    firstName : "Bhuwan",

    lastName : "Rijal"
  }

  let  x=  person.fullName.call(person1, "USA", 125000);
  let  y=  person.fullName.call(person2);

  console.log(x, " ", y)

  // we can also have arguments with call method
}

//========== We can use applly as well ================

{
  const person = {
    employee: function(address, salary){
      return this.firstName+ " "+this.lastName+" => "+ address+" , "+salary;
    }
  }
  const person1 = {
    firstName: "John",
    lastName : "Doe"
  }

  const x = person.employee.apply(person1,[ "USA", 125000]);
  console.log(x);
}

// =============Function Borrowing================
{
  // function bind()
const family = {
  firstName : "",
  lastName : "",
fullName : function (){
  return this.firstName+" "+this.lastName;
}
}
const member1 = {
  firstName : "KabiRaj",
  lastName : "Rijal"
}

let c = family.fullName.bind(member1);
console.log(c);

const z = () =>{
  console.log("Hello World !")
}

setTimeout(z, 3000)
}