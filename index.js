// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// const fruits = ["Алим","Банана","Жүрж"];
// for (let i = 0; i < fruits.length; i++){
//  console.log(fruits[i]);   
// }

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i =1; i<=19; i +=2){
//     console.log([i]);
    
// }

// let word = "hello";
// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

// let sum =0;
// for( let i = 1; i <=100 ; i++){
//     sum += i;
// }
// console.log("Total", sum)

// let sum =0;
// for ( let i = 2; i <=100; i +=2){
//     sum+=i;
// }
// console.log("total",sum);

// let squares = [];
// for (let i = 1; i <= 10; i++) {
//   squares.push(i * i);
// }
// console.log(squares);

// let numbers = [5, 10, 15, 20];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// let numbers = [10, 20, 30, 40];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// let average = sum / numbers.length;
// console.log(average); 

// const word = "school";
// let total =0;
// for (let i = 0; i< word.length; i++){
//     ++total
// }
// console.log(total);

// let numbers = [3, 8, 12, 5, 6, 7];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     count++;
//   }
// }
// console.log(count);

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// const word ="hello";
// for ( let i= word.length -1; i>=0; i--){
//     console.log(word[i]);
    
    
// }

// let word ="banana";
// let letter ="a";
// let count ="0";
// for (let i=0;i<word.length; i++){
//     if (word[i]===letter){
//         count++;}
// }
// console.log(count);

// for (let i =5; i<50; i +=5){
//     console.log([i]);
    
// }

// for (let i =100; i>=0; i -=10){
//     console.log([i]);
    
// }


// let sentence = "Би JavaScript сурч байна";
// let spaceCount = 0;
// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] === " ") {
//     spaceCount++;
//   }
// }
// console.log(spaceCount); 

// let a = 2, b=5;
// let result =1;
// for (let i =0;i<b;i++){
//     result *=a;
// }
// console.log(result);



// let n =5;
// let factorial =1;
// for (let i=1; i<=n; i++){
//     factorial*=1;
// }
// console.log(factorial);

// let numbers = [4, 7, 2, 7, 9];
// let target = 7;
// let index = -1;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === target) {
//     index = i;
//     break;
//   }
// }
// console.log(index); 


//  25 const word = "JavaScript"
//  const count=0;
//  for (let i=0; i<word.length; i++){
//     let code 
//  }

// let number=12;
// for ( let  i =1; i <=number; i++){
//     if (number % i ===0){
//         console.log([i]);
        
//     }
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("*".repeat(i));
// }


// let numbers = [5, 12, 20, 8];
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] += 10;
// }
// console.log(numbers);

// let booleans = [false, false, true, true];
// let newBooleans = [];
// for (let i = 0; i < booleans.length; i++) {
//   if (booleans[i] === false) {
//     newBooleans.push(true);
//   } else {
//     newBooleans.push(true);
//   }
// }
// console.log(newBooleans);

// let products = [{ title: "UUT", price: 500 }, { title: "SAW", price: 800 }];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > 600) {
//     console.log(products[i]);
//   }
// }

// let employees = [{ name: "Амгалан", department: "IT" }, { name: "Номин", department: "HR" }];
// for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i].name);
// }

// let students = [{ name: "BATAA", score: 85 }, { name: "SARAA", score: 92 }];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].score > 90) {
//     console.log(students[i].name);
//   }
// }

// let products = [{ title: "Уут", stock: 5 }, { title: "Сав", stock: 0 }];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].stock !== 0) {
//     console.log(products[i]);
//   }
// }

// let books = [{ title: "Монгол түүх", year: 2000 }, { title: "Газар зүй", year: 2010 }];
// for (let i = 0; i < books.length; i++) {
//   if (books[i].year > 2005) {
//     console.log(books[i]);
//   }
// }

// let students = [{ name: "Бат", age: 20 }, { name: "Сара", age: 22 }];
// let sumAge = 0;
// for (let i = 0; i < students.length; i++) {
//   sumAge += students[i].age;
// }
// console.log(sumAge / students.length); 

// let employees = [
//   { name: "Амгалан", salary: 1000, active: true, department: "IT" },
//   { name: "Номин", salary: 1500, active: false, department: "HR" },
//   { name: "Баяр", salary: 1200, active: true, department: "IT" }
// ];

// let totalSalary = 0;
// let activeCount = 0;

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].active === true) {
//     totalSalary += employees[i].salary;
//     activeCount++;
//   }
// }

// if (activeCount === 0) {
//   console.log("Идэвхтэй ажилтан байхгүй");
// } else {
//   console.log(totalSalary / activeCount); 
// }