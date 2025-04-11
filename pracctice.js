// let
// let a = 10;
// if(true){
//     let a =15;
//     console.log(a); it will give 15 because we want are output inside of the block scope.
// }
//console.log(a);  it gives the 10 because we declare outside of the block scope.

// const:
// console.log(a);
// const a = 10;
// const a = 20;
// a = 30;
// console.log(a);     in this we can't do re declaration and re assigning

//let and const are blocked scoped:
// if(true){
//     let y = 10;
//     const z =20;
//     console.log(y);  10
// console.log(z);    20
// }
// console.log(y);   the y and z give the error because we are declaring outside of the block sscope
// console.log(z);

// redeclare and re assign :
// var x = 5;
// let y = 10;
// const z = 15;

// x = 50; 
// y = 100;
// z = 150; 
// console.log(x, y, z);  the outputs are changed while doing the re assigninbg but when we see the const it gives the error so this will not run.

//hoisting
// console.log(a);
// var a = 5; 

// console.log(b);
// let b = 10;
// at first we get the undefined output and in second it gives the refference error.


// const does not allow re-assignment, but you can modify objects and arrays with their methods.
//const with objects:
// const obj = { name: "Alice" };
// obj.name = "Bob";               // ✅ Allowed
// console.log(obj.name);          // "Bob"
// obj = { age: 25 }; ❌ Error: Assignment to constant variable because we cant reassign in const.

//const with arrays:
// const arr = [1, 2, 3];
// arr.push(4);          // ✅ Allowed
// console.log(arr);     // [1, 2, 3, 4]

// arr = [5, 6, 7]; ❌ Error same as object we can't re assign the const.


// practice question :
// const arr = [1, 2, 3];
// arr[0] = 100;
// console.log(arr); it happens because we change the value of 0th index as 100.

// const obj = { name: "John" };
// obj.age = 25;
// console.log(obj);   because we add the age = 25 in obj.

// best tricky question
// var num = 1;              
// function test() {
//     console.log(num);     it will give the undefined because of hoisting.
//     var num = 2;
//     console.log(num);     it will give the 2 as output because we are doing log inside of function scope.
// }
// test();

// //string indexing
// let str = "JavaScript";
// console.log(str[0]);  // "J" to get the 1st character
// console.log(str[4]);  // "S"
// console.log(str.length); // "10" (Length of the string)
// console.log(str[str.length - 1]); // "t" (Last character)

// its a string method
// Split
// let data = "apple,banana,grape";
// console.log(data.split(",")); // ["apple", "banana", "grape"]

// sometimes because of console the double quote change in single quotes so we use the JSON.stringify() to force the value in double quotes
// console.log(JSON.stringify("Hello".split(""))); // ["H", "e", "l", "l", "o"]

//string concatenation while adding the two string we have to us + symbol infront of the variable
// let x ="20";
// let y ="10";
// let sum = +x + +y;
// console.log(sum);

// let str = 'java is a code'
// console.log(str.replace('vaibhav','she'));

//assignment operator
// let z = 50;
// z -= 10;
// z /= 2;
// z *= 4;
// z %= 6;
// console.log(z);

//while loop 
// let num = 1;
// let sum =0;
// while(num <= 50){
//     if(num%2===0){
//         sum += num;
//     }
//     num++;
// }
// console.log(sum);

//multiplication of 5
// let i=5;
// let num =1;
// while(num <= 10){
//     console.log(num * i);
//     num++;
    
// }

// //for loop
// write a code for finding odd No. from 1 to 15
// for(let n = 1; n<=15;n+=2){
//     console.log(n);
// }

//write a 10 multiples of a number
// let n = 2;
// for(num =1; num <=10; num++ ){
//     console.log(n * num); 
// }

//adding the even no. btw 1 to 50
// let sum = 0;
// for(let n=0; n <=50; n++){
// if(n%2===0){
//    sum+=n;
// }
// }
// console.log( "sum of the even No.:", sum);

//finnd how many times digit appears in no. using for loop.
// let number =12233458221;
// let digitToFind = 2;
// let count =0;
// let numStr = number.toString();
// for(i=0;i<numStr.length; i++){
//     if(numStr[i] == digitToFind){
//         count++;
//     }
// }
// console.log(`the digit ${digitToFind} appears ${count}`);

//finding even no. from 2 to 20:
// for(i=2; i<=20; i+=2){
//     console.log(i);
// }

//reverse 10 to 1:
// for(i=10; i>=0; i--){
//     console.log(i);
// }

// Print the first 10 multiples of 5 (5, 10, 15...50).
// for(i=1; i<=10; i++){
//         console.log(i*5);
//  }

//Print the sum of the first 10 natural numbers (1+2+3...+10).
// let num =0;
// for(i=1; i<=10; i++){
//          console.log(num +=i);
//           }
    
// Print all numbers from 1 to 50 but skip multiples of 7.
// for(i=1; i<=50; i++){
//     if(i%7 === 0){
//         continue;
//     }
// console.log(i);

// do while loop 
// let i = 1; sum=0;
//  do{
// sum+=i;
// i++;
//  }while(i<=10);
//  console.log(sum);

// let num;
// do{
//    num=parseInt(prompt("enter a number: "));
// }while(num!==999);
// console.log("you entered the right no.")
//using prompt which caan't be execute on vs code because it only works on website this isn't aplicable for node if u want to use this download prompt-sync or readline-sync.
// const prompt = require("prompt-sync")();
// let num;
// do {
//     num = parseInt(prompt("Enter a number (Enter 999 to stop): "));
// } while (num !== 999);
// console.log("You entered 999. Program stopped.");

// array concatination
// let arr1 = ["a", "b", "c"];
// let arr2 = [1,2,3];
// let mergedArr = arr1.slice().concat(arr2.slice());
// let mergeArr = arr1.concat(arr2);
// let mergArr = [...arr1,...arr2];
// console.log(mergArr);
// console.log(mergedArr);
// console.log(mergeArr);
// let mergeiArr = [...arr1];
// console.log(mergeiArr===arr1);

//pop,push,unshift and shift
// let vegetables = ["tomato", "onion"];
// vegetables.push("potato","carrot");
// console.log(vegetables);

// let scores = [10, 20, 30, 40];
// scores.pop(40);
// console.log(scores);

// let subjects = ["science", "history"];
// subjects.unshift("emglish","hindi");
// console.log(subjects);

// let numbers = [100, 200, 300];
// numbers.shift(100);
// console.log(numbers);

//Use push to add "grape" and "mango" in fruits, then use pop to remove the last element.
// let fruits = ["apple", "banana"];
// fruits.push("grape","pineapple");
// console.log("after push:",fruits);
// fruits.pop("pineapple");
// console.log(fruits);

//Add "zero" at the start of the array and "five" at the end.
// let nums = [1, 2, 3, 4];
// nums.unshift(0);
// console.log("after addinng 0 at the start:",nums);
// nums.push(5);
// console.log(nums);

// Add "Monday" at the start and "Sunday" at the end of the array.
// let days = ["Tuesday", "Wednesday", "Thursday"];
// days.unshift("monday");
// console.log("after adding:", days);
// days.push("sunday");
// console.log(days);

//Remove the first and last element from the array.
// let values = [10, 20, 30, 40, 50];
// values.shift();
// console.log(values);
// values.pop();
// console.log(values);

// Given an array, add an element at the start and remove the last element in the same step.
// let data = [2, 3, 4, 5];
// data.unshift(1);
// data.pop();
// console.log(data);

// First, add "new" to the end, then remove the first element.
// let list = ["old", "middle", "last"];
// list.push("new");
// console.log(list);
// list.shift();
// console.log(list);

//Add "start" at the beginning, "end" at the end, then remove "middle".
// let words = ["middle"];
// words.unshift("start");
// words.push("end");
// words.splice(1,1);
// console.log(words);

// let numbers = [10, 20, 30, 40];
// let sum = numbers.reduce((acc, num) => {return acc + num},0);
// console.log(sum);

//.map
// let numbers = [2, 4, 6, 8];
// let multi = numbers.map((num) => {return num*5});
// console.log(multi);

// //.filter
// let numbers = [-5, 3, -1, 6, -8, 10];
// let positiveNumber = numbers.filter((num) => {return num > 0});
// console.log(positiveNumber);

// //.reduce
// let numbers = [5, 10, 15, 20];
// let sum = numbers.reduce((acc,num) => {return acc + num}, numbers[0]);
// console.log(sum);

// //reverse
// let arr = [10, 20, 30, 40, 50];
// let newArray =[...arr].reverse();
// console.log(newArray);

//sort an array by age
// let people = [
//     { name: "Ajay", age: 29 },
//     { name: "Rohit", age: 24 },
//     { name: "Sita", age: 26 }
// ];
// let con = people.sort((a,b) => a.age - b.age);
// console.log(con);

// reverse an array without modifying in org arr.
// let arr = [1, 2, 3, 4, 5];
// let reverseArr = [];
// for(i=arr.length - 1; i>=0;i--){
//    reverseArr.push(arr[i]);
// }
// console.log(reverseArr);

//reverse while changing in original array.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
// [arr[i],arr[j]]=[arr[j],arr[i]];
// }
// console.log(arr);

// let arr = [1,2,3,4,5];
// let left = 0;
// let right = arr.length-1;
// while(left<right){
//     [arr[left],arr[right]]=[arr[right],arr[left]];
//     left++;
//     right--;
// }
// console.log(arr);

// //sort an array highest to lowest
// let students = [
//     { name: "Aman", marks: 85 },
//     { name: "Raj", marks: 90 },
//     { name: "Sara", marks: 78 }
// ];
// let smor =students.sort((a,b) => b.marks - a.marks);
// console.log(smor);

// let data = "Red,Green,Blue,Yellow";
// let num = data.split(",");
// console.log(num);

// let number = "12345";
// let str = number.split("");
// console.log(str);

// let phone = "123-456-7890"; // Convert to ["123", "456", "7890"]
// let call = phone.split("-");
// console.log(call
// );

// //objects
// creating a laptop with these properties 
// const laptop = {
//     brand : "asus",
//     model : "f15",
//     price : 60000
// }
// console.log(laptop);

// creating a new emppty object 
// const laptop = {}
//     laptop.brand = "asus";
//     laptop.model = "f15";
//     laptop.price = 60000;
// console.log(laptop);

// making a restaurant while creating an array in menu section and adding a new coursde on it
// let restaurant = {
//     name: "Food Paradise",
//     location: "New Delhi",
//     menu: { 
//         starter: ["Spring Rolls", "Garlic Bread", "Soup"],
//         main: ["Butter Chicken", "Paneer Tikka", "Biryani"],
//         dessert: ["Gulab Jamun", "Ice Cream", "Brownie"]
//     }
// };
// // Adding a new course in menu;
// restaurant.menu.bevarages = ['cofee','tea','sshake'];
// console.log(restaurant.menu);

// addding a new property
// const book = {
//     title : "javascript mastery",
//     author : "John Doe"
// };
// book.year = 2021;
// console.log(book);

// //deep copy by help of structuredClone()
// const person = {
//     name: "John",
//     address: { city: "New York", zip: 10001 }
//   };
//   const personDeepClone = structuredClone(person);
// personDeepClone.address.city = "San Francisco";  // Now only modifies the clone
// console.log(person.address.city);  // New York (Original remains unchanged)
// console.log(personDeepClone.address.city);  // San Francisco

//object destructure
// const laptop = { brand: "Dell", price: 60000, color: "Silver" };
// const {brand :brandName ,price:lapPrice, color:lapColor} = laptop;
// const {brand , price, color}= laptop;
// console.log(brand , price, color);
// console.log(brandName,lapColor,lapPrice);

// const employee = { name: "Sarah", department: "HR" };
// const { name, department, age=30}=employee
// console.log(name,department,age);

//objects inside an array
// //make a book whose having 3 objects insie of it and access one of them and after that iterate the name and salary of each object inside of book
// const book =[
//   {name:"fury", title:"chlrenoob", year:2021},
//   {name:"furry", title:"chlnanoob", year:2025},
//   {name:"ferry", title:"chlrebot", year:2024}
// ];
// console.log(book[1].title);
// for(let books of book){
//   console.log(books.name, books.year);
// }

//find a author whose name starts with "A";
// const book =[
//   {name:"Alla", title:"chlrenoob", year:2021},
//   {name:"aky", title:"chlnanoob", year:2025},
//   {name:"ferry", title:"chlrebot", year:2024}
// ];
// const bookUpdate = book.find(person => person.name.startsWith("a"));
// console.log(bookUpdate);
// const bookUpdate2 = book.filter(person => person.name.toLowerCase().startsWith("a"));//.filter give us the multiple objects while .find only give 1st object
// console.log(bookUpdate2);

//function
//Write a function that takes two numbers and returns their product.
// function twoNumbers(num1,num2){
//     return num1 * num2;
// }
// let result = twoNumbers(3,4);
// console.log(result);

// Write a function that greets a user with a default name "Guest" if no name is given.
// function greet(name ="Guest"){
//     return "hello," + name;
// }
// let meet = greet();
// console.log(meet);
// meet = greet("ritu");
// console.log(meet);

// Write a function that accepts any number of arguments and returns their sum.
// function sumAll(...numbers) {             // this is a rest parameter.
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sumAll(1, 2, 3, 4, 5)); 
// console.log(sumAll(10, 20, 30));     
// console.log(sumAll());               

// write an arrow function which give the output hhello, world!
// const greet = () => "hello, world!";
// console.log(greet());

// Convert this regular function into an arrow function:
// function greet(name) {
//   return "Hello " + name;
// }
// const greet =  (name = "randi") => ("hello " + name);
// console.log(greet());

// Use an arrow function with .map() to double all elements of the array.
// const arr = [1, 2, 3, 4]; 
// const square = arr.map(num => num * 2);
// console.log(square);

// Use an arrow function to check whether a number is even or not.
// const isEven = (num) => num % 2 === 0;
// console.log(isEven(5));
// console.log(isEven(8));

// Create an arrow function that takes a string and returns its reverse.
// const reverseString = str => str.split("").reverse().join("");
// console.log(reverseString("hello"));

// Use an arrow function to capitalize the first letter of every word in an array.
// const words = ["apple", "banana", "grape"];
// const capitalizedWords = words.map(
//   word => word.charAt(0).toUpperCase() + word.slice(1)
// );
// console.log(capitalizedWords); 

//Create a function that receives an array of users and returns the names of users older than 18 using .filter() and arrow functions.
// const users = [
//     { name: "Amit", age: 17 },
//     { name: "Riya", age: 21 },
//     { name: "Raj", age: 25 },
//   ];
// const userName = (users) => {
//     return  users
//     .filter(users => users.age > 18)
//     .map(users => users.name);
// };
//   console.log(userName(users));
  
// // this keyword inside a object's method
// const obj= {
//     a : 10,
//     x : function(){
//         console.log(this);
//     }
// }
// obj.x();          //only calling function will give u referrence error;


// call , apply , bind methods

// CALL() - it help  us to borroww the function 
// const name ={
//     firstname : "Akshay",
//     lastname : "Kumar",
//     printFullName : function(){
//         console.log(this.firstname + " " + this.lastname); 
//     }
// }
// name.printFullName();

// const name2 =  {
//     firstname : "Raj",
//     lastname   : "verma"
// }
// name.printFullName.call(name2);

// APPLY() - same as call method but the difference is it make the 2nd argument as a array list.
// const name ={
//     firstname : "Akshay",
//     lastname : "Kumar",
// }
// let printFullName = function(hometown,state){                                      //we created a seprate function, so we can easily access.
//     console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
// }
// printFullName.apply(name,["mumbai","MP"]);

// const name2 =  {
//     firstname : "Raj",
//     lastname   : "verma"
// }
// printFullName.apply(name2,["delhi","Up"]);

//BIND() - BIND METHOD DOESN'T DIRECTLY INVOKE THE FUNCTION BUT IT MAKES THE SAME COPY OF THAT FUNCTION SO U CAN INVOKE LATER.
    // const name ={
    //     firstname : "Akshay",
    //     lastname : "Kumar",
    // }
    // let printFullName = function(hometown,state){                                   
    //     console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
    // }
    // printFullName.apply(name,["mumbai","MP"]);
    
    // const name2 =  {
    //     firstname : "Raj",
    //     lastname   : "verma"
    // }
    // let printMyName = printFullName.bind(name2,"delhi","Up");
    // printMyName();

    //  Function Hoisting 
//     greet();
//     function greet(){
// console.log("good morning");
//     }

 //  setTimeout() and setInterval()
 
//  setTimeout(function(){                      // this is a anonymous function
//     console.log("hi! im FuRY")
//  },3000);                 // here, we set a timne delay so when it invoke it takes a delay 3000ms.

 // now let's take an example of setInterval -- same as setTimeOut but the cache is it print the line of code while in interval of time
 
//  const intervalID = setInterval( () => {                   // we create a variable so that we can easily use the clearinterval
//     console.log("repeat")
//  },2000);

//  setTimeout(() => {
//     clearInterval(intervalID);          //here it will stop the setInterval
//     console.log("stopped");
//  },6000);                                 

// callback function....
// Step 1: Define a function that prints "Hi"
// function sayHi(name) {
//     console.log("Hi", name);
//   }
  // Step 2: Define a function that accepts a callback
//   function greet(callbackFunction) {
//     console.log(callbackFunction);
//     callbackFunction("randi"); // call the callback
//   }
  // Step 3: Call greet and pass sayHi as the callback
//   greet(sayHi);
  