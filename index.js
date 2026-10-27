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

// ееееееее7

// let water = 0;
// let capacity = 20;
// let bucket = 4;
// let count = 0;

// while (water < capacity) {
//     water += bucket;
//     count++;
// }

// console.log(count + " удаа");

// let battery = 35;
// let minutes = 0;
// while ( battery <100){
//     battery +=5;
//     minutes++;
// }
// console.log(minutes,"минут");

// let battery = 100;
// let games =0;
// while (battery>=15){
//     battery-=15
//     games++
// }
// console.log  ( games + "тоглолт" + battery +"нэгж цэнэг");

// let temperature=30;
// let target=22;
// let minutes = 0;
// while( temperature > target){
//     temperature -=2;
//     minutes++
// }
// console.log(minutes +"Минут");

// let floor = 2;
// let targetFloor = 7;
// while (floor < targetFloor) {
//   floor++;
//   console.log(floor);
// }

// let tickets=17;
// let packs=0;
// while (tickets>=3){
//   tickets-=3
//   packs++
// }
// console.log(packs +"Багц "+ tickets+"Тасалбар үлдэнэ");

//  let items = 38;
//  let boxCapacity = 6;
//  let box = 0;
//  while ( items >0){
//     items -=boxCapacity;
//     box++;
//  }
//  console.log( box +"Хайрцаг");

// let paper = 23;
// let  pagesPerDocument = 5;
// let docs=0;
// while (paper >= pagesPerDocument) {
//     paper -= pagesPerDocument;
//     docs++;
// }

// console.log(docs + " баримт, " + paper + " хуудас");

// let health = 50;
// let damage = 12;
// let hits = 0;

// while (health > 0) {
//     health -= damage;
//     hits++;
// }

// console.log(hits + " цохилт");

// let number = 23;
// let divisor = 5;
// let quotient = 0;

// while (number >= divisor) {
//     number -= divisor;
//     quotient++;
// }

// console.log("Ноогдвор: " + quotient + ", Үлдэгдэл: " + number);

// let number = 160;
// let count = 0;

// while (number > 10) {
//     number = Math.floor(number / 2);
//     count++;
// }

// console.log(count + " удаа, эцсийн утга " + number);

// let number = 472;
// let sum = 0;

// while (number > 0) {
//     let lastDigit = number % 10;
//     sum += lastDigit;
//     number = Math.floor(number / 10);
// }

// console.log(sum);

// let number = 234;
// let product = 1; //

// while (number > 0) {
//     let lastDigit = number % 10;
//     product *= lastDigit;
//     number = Math.floor(number / 10);
// }

// console.log(product);

// let number = 5724;
// let targetDigit = 7;
// let found = false;

// while (number > 0) {
//     let lastDigit = number % 10;
//     if (lastDigit === targetDigit) {
//         found = true;
//         break;
//     }
//     number = Math.floor(number / 10);
// }

// console.log(found);

// let numbers = [4, 7, 3, 0, 9, 2];
// let sum = 0;
// let i = 0;

// while (i < numbers.length && numbers[i] !== 0) {
//     sum += numbers[i];
//     i++;
// }

// console.log(sum);

// let numbers = [5, 8, 2, -1, 7];
// let count = 0;
// let i = 0;

// while (i < numbers.length && numbers[i] >= 0) {
//     count++;
//     i++;
// }

// console.log(count);

// let prices = [3000, 5000, 4000, 2000];
// let money = 10000;
// let count = 0;
// let i = 0;

// while (i < prices.length && money >= prices[i]) {
//     money -= prices[i];
//     count++;
//     i++;
// }

// console.log(count + " бараа, " + money + " төгрөг");

// let seats = [true, true, false, true, false];
// let i = 0;
// let foundIndex = -1;

// while (i < seats.length) {
//     if (seats[i] === false) {
//         foundIndex = i;
//         break;
//     }
//     i++;

// }

// console.log(foundIndex);

// let tasks = ["Имэйл шалгах", "Тайлан бичих", "Код шалгах"];

// while (tasks.length > 0) {
//     let finishedTask = tasks.shift();
//     console.log("Дууссан: " + finishedTask);
// }

// console.log("Эцсийн массив: ", tasks);

// let durations = [15, 20, 10, 25];
// let availableMinutes = 50;
// let count = 0;
// let i = 0;

// while (i < durations.length && availableMinutes >= durations[i]) {
//     availableMinutes -= durations[i];
//     count++;
//     i++;
// }

// console.log(count + " хичээл, " + availableMinutes + " минут үлдэнэ");

// --------------9---------------

// function greet(name) {
//     return `Сайн уу, ${name}!`;
// }
// console.log(greet("Батаа"));

// function getLength(word) {
//     return word.length;
// }
// console.log(getLength("apple"));
// let word = "apple";
// console.log(getLength(word));

// function toUpper(text) {
//     return text.toUpperCase();
// }
// console.log(toUpper("hello"));
// let text = "javascript";
// console.log(toUpper(text));
//

// function toLower(text) {
//     return text.toLowerCase();
// }
// console.log(toLower("HELLO"));

// function getFirstLetter(word) {
//     return word.charAt(0);
// }
// console.log(getFirstLetter("apple"))

// function getLastLetter(word) {
//     return word.at(-1);
// }
// console.log(getLastLetter("cat"));

// function joinWords(first, second) {
//     return first.concat(" ", second);
// }
// console.log(joinWords("Good", "morning"));

// function cleanText(text) {
//     return text.trim();
// }
// console.log(cleanText(" hello "));

// function repeatWord(word, count) {
//     return word.repeat(count);
// }
// console.log(repeatWord("ha", 3));

// function getPrefix(word) {
//     return word.slice(0, 3);
// }
// console.log(getPrefix("javascript"));

// function getEnding(word){
//     return word.slice(0,3);
// }
// console.log(getEnding("apple"));

// function capitalize(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }
// console.log(capitalize("hello"));

// function countVowels(word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if ("aeiou".includes(word[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("education"));

// function countSpaces(sentence) {
//     return sentence.split(" ").length - 1;
// }
// console.log(countSpaces("I love coding"));

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(4, 5));

// function square(number) {
//     return Math.pow(number, 2);
// }
// console.log(square(5));

// function getMax(a, b) {
//     return Math.max(a, b);
// }
// console.log(getMax(4, 9));

// function sumDigits(number) {
//     let str = number.toString();
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//         sum += Number(str[i]);
//     }
//     return sum;
// }
// console.log(sumDigits(472));

// function calculateAge(yearOfBirth) {
//     let currentYear = new Date().getFullYear();
//     return currentYear - yearOfBirth;
// }
// console.log(calculateAge(2000));

// function calculateDiscountedPrice(price, discountPercent) {
//     return price - (price * discountPercent) / 100;
// }
// console.log(calculateDiscountedPrice(10000, 20));

// function calculatePerimeter(width,height){
//     return(width+height)*2
// }
// console.log(calculatePerimeter(4,6));

// function convertHours(hours){
//     return hours *60
// }
// console.log(convertHours(2));

// const reverseNumber = (number) => {
//   return number.toString().split("").reverse().join("");
// };

// console.log(reverseNumber(47));

// const calculateSum = (n) => (n * (n + 1)) / 2;
// console.log(calculateSum(5));

// const calculateFactorial = (n) => {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// };
// console.log(calculateFactorial(5));

// const calculatePower = (base, exponent) => Math.pow(base, exponent);
// console.log(calculatePower(2, 3));

// const isEven=(number)=> number % 2 ===0;
// console.log(isEven(7));

// const isDivisibleByFive= (number)=> number %5===0;
// console.log(isDivisibleByFive(20));

// const getFullName=(person)=> `${person.lastName} ${person.firstName}`;
// console.log(getFullName({lastName :"Болд", firstName: "Бат"}));

// const getProductTotal = (product) => product.price * product.quantity;
// console.log(getProductTotal({ price: 500, quantity: 4 }));

// const createUser = (name, age) => ({ name, age });
// console.log(createUser("Бат", 20));

// const isStudentPassed = (student) => student.score >= 60;
// console.log(isStudentPassed({ score: 85 }));

// const getCity = (user) => user.address.city;
// console.log(getCity({ address: { city: "Дархан" } }));

// const getRectangleArea = (rectangle) => rectangle.width * rectangle.height;
// console.log(getRectangleArea({ width: 5, height: 3 }));

//  const getProductValues = (product) => Object.values(product);
// console.log(getProductValues({ title: "Ном", price: 5000 }));

// const sumArray = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// };
// console.log(sumArray([1, 2, 3]));

// const findMin = (numbers) => Math.min(...numbers);
// console.log(findMin([3, 9, 2]));

// const getEvenNumbers = (numbers) => {
//     const result = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             result.push(numbers[i]);
//         }
//     }
//     return result;
// };
// console.log(getEvenNumbers([1, 2, 3, 4]));

// const getNegativeNumbers = (numbers) => {
//     const result = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             result.push(numbers[i]);
//         }
//     }
//     return result;
// };
// console.log(getNegativeNumbers([-2, 3, -5, 0]));

// const sumEvenNumbers = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             sum += numbers[i];
//         }
//     }
//     return sum;
// };
// console.log(sumEvenNumbers([1, 2, 3, 4]));

// const uppercaseWords = (words) => {
//     const result = [];
//     for (let i = 0; i < words.length; i++) {
//         result.push(words[i].toUpperCase());
//     }
//     return result;
// };
// console.log(uppercaseWords(["cat", "dog"]));

// const combineArrays = (firstArray, secondArray) => firstArray.concat(secondArray);
// console.log(combineArrays([1, 2], [3, 4]));

// function getExpensiveProducts(products, minPrice) {
//   let expensiveProducts = [];

//   for (let i = 0; i < products.length; i++) {
//     if (products[i].price > minPrice) {
//       expensiveProducts.push(products[i]);
//     }
//   }

//   return expensiveProducts;
// }
// let products3 = [{ title: "Дэвтэр", price: 1000 }];
// console.log(getExpensiveProducts(products3, 1000));

// -------------------11-------------------

// const printLabel=(text)=>{
//     return "[".concat(text,"]")
// }
// console.log(printLabel("Шинэ"));

// const printLetterPositions=(word)=> {
//     for( let i=0; i < word.length; i++){
//         const position = i+1;
//         const letter = word.charAt(i);
//         console.log(`${position}: ${letter}`);
//      }

// }
//     printLetterPositions("sun");

// const printEverySecondLetter=(word)=>{
//     for (let i =1; i < word.length; i+=2){
//      console.log(word.charAt(i));
//     }
// }
// printEverySecondLetter("abcdef")

// const printHiddenPhone=(phone)=>{
//     const lastFour=phone.slice(-4);
//     console.log(lastFour.padStart(8,"*"))

// }
// printHiddenPhone("99112233")

// const printReplacedText = (text, oldWord, newWord) => {
//     console.log(text.replace(oldWord, newWord));
// };

// printReplacedText("I like tea", "tea", "coffee");

// const printWords = (sentence) => {
//     const words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         console.log(words[i]);
//     }
// };
// printWords("We learn JavaScript");

// const printHashtag=(phrase)=>{
//     const cleanText=phrase.replaceAll(" ", "");
//     console.log("#".concat(cleanText));

// }
// printHashtag("Learn JavaScript");

// const printConsonants = (word) => {
//     for (let i = 0; i < word.length; i++) {
//         const char = word.charAt(i);
//         if (!"aeiou".includes(char)) {
//             console.log(char);
//         }
//     }
// };
// printConsonants("cat");

// const printDivision = (a, b) => {
//     const quotient = Math.floor(a / b);
//     const remainder = a % b;
//     console.log(` bukhel kheseg : ${quotient}, uldegdel: ${remainder}`);
// };
// printDivision(17, 5);

// const printDecimal = (number) => {
//     console.log(number.toFixed(2));
// };
// printDecimal(3.14159);

// const printFahrenheit = (celsius) => {
//     const fahrenheit = (celsius * 9 / 5) + 32;
//     console.log(fahrenheit + "°F");
// };
// printFahrenheit(0);

// const printHeight=(centimeters)=>{
//     const meters = Math.floor(centimeters / 100);
//     const cm = centimeters % 100;
//     console.log(`${meters} m ${cm} cm`);
// }
// printHeight(175);

// const printWeight = (grams) => {
//     const kg = Math.floor(grams / 1000);
//     const g = grams % 1000;
//     console.log(`${kg} кг ${g} г`);
// };
// printWeight(2500);

// const printDistance = (a, b) => {
//     console.log(Math.abs(a - b));
// };

// printDistance(3, 10);

// const printBoxCount = (itemCount, capacity) => {
//     console.log(Math.ceil(itemCount / capacity) + " khairtsag");
// };
// printBoxCount(14, 6);

// const printPageCount = (itemCount, pageSize) => {
//     console.log(Math.ceil(itemCount / pageSize) + " хуудас");
// };
// printPageCount(23, 10);

// const printSavingMonths = (target, monthlySaving) => {
//     console.log(Math.ceil(target / monthlySaving) + " сар");
// };
// printSavingMonths(1000, 300);

// const printRoundedValues = (number) => {
//     console.log(`Доош: ${Math.floor(number)}, дээш: ${Math.ceil(number)}`);
// };
// printRoundedValues(4.3);

// const printBatteryStatus = (percent) => {
//     if (percent <= 20) {
//         console.log("Цэнэг бага");
//     } else if (percent <= 80) {
//         console.log("Цэнэг хэвийн");
//     } else {
//         console.log("Цэнэг өндөр");
//     }
// };
// printBatteryStatus(20);

// const printTrafficInstruction=(color)=>{
//     if (color === "red") console.log("Stop");
//     else if (color === "yellow") console.log("Ready");
//     else if (color === "green") console.log("Go");
// };
// printTrafficInstruction("red");

// const printWaterState = (temperature) => {
//     if (temperature < 0) {
//         console.log("ice");
//     } else if (temperature < 100) {
//         console.log("water");
//     } else {
//         console.log("steam");
//     }
// };
// printWaterState(-5);

// const printRating = (rating) => {
//     if (rating <= 2) {
//         console.log("Сайжруулах шаардлагатай");
//     } else if (rating === 3) {
//         console.log("Дундаж");
//     } else {
//         console.log("Сайн");
//     }
// };
// printRating(2);

// const printUploadStatus = (sizeMB) => {
//     if (sizeMB <= 10) {
//         console.log("Хуулж болно");
//     } else {
//         console.log("Файл хэт том");
//     }
// };
// printUploadStatus(8);

// const printUsernameStatus = (username) => {
//     if (username.length >= 4 && username.length <= 12) {
//         console.log("Нэрийн урт тохиромжтой");
//     } else {
//         console.log("4–12 тэмдэгт оруулна уу");
//     }
// };
// printUsernameStatus("coder");

// const printMatchResult = (homeScore, awayScore) => {
//     if (homeScore > awayScore) {
//         console.log("Талбайн эзэд хожлоо");
//     } else if (homeScore < awayScore) {
//         console.log("Зочин баг хожлоо");
//     } else {
//         console.log("Тэнцлээ");
//     }
// };
// printMatchResult(3, 1);

// const printElevatorDirection = (currentFloor, targetFloor) => {
//     if (targetFloor > currentFloor) {
//         console.log("Дээш явна");
//     } else if (targetFloor < currentFloor) {
//         console.log("Доош явна");
//     } else {
//         console.log("Энэ давхарт байна");
//     }
// };
// printElevatorDirection(2, 7);

// const printStorageStatus = (used, capacity) => {
//     if (used < capacity) {
//         console.log("Зай байна");
//     } else if (used === capacity) {
//         console.log("Дүүрсэн");
//     } else {
//         console.log("Багтаамж хэтэрсэн");
//     }
// };
// printStorageStatus(70, 100);

// const printPaymentStatus = (isPaid, isCancelled) => {
//     if (isCancelled) {
//         console.log("Цуцлагдсан");
//     } else if (isPaid) {
//         console.log("Баталгаажсан");
//     } else {
//         console.log("Төлбөр хүлээж байна");
//     }
// };

// const changePrice = (product, newPrice) => {
//     Object.assign(product, { price: newPrice });
//     console.log(product);
// };
// changePrice({ title: "Дэвтэр", price: 2000 }, 2500);

// const completeTask = (task) => {
//     task.completed = true;
//     console.log(task);
// };
// completeTask({ title: "Унших", completed: false });

// const addPhone = (contact, phone) => {
//     Object.assign(contact, { phone: phone });
//     console.log(contact);
// };
// addPhone({ name: "Болд" }, "99112233");

// const removePassword = (account) => {
//     delete account.password;
//     console.log(account);
// };
// removePassword({ username: "bold", password: "abc" });

// const restock = (product, amount) => {
//     product.stock += amount;
//     console.log(product.stock);
// };
// restock({ stock: 5 }, 3);

// const addToCart = (cart, item) => {
//     cart.push(item);
//     console.log(cart);
// };
// addToCart(["Сүү"], "Талх");

// const serveNext = (queue) => {
//   const served = queue.shift();
//   console.log(`Үйлчлүүлсэн: ${served}`);
//   console.log(queue);
// };
// serveNext(["Болд", "Саруул"]);


// const removeLastItem = (items) => {
//     items.pop();
//     console.log(items);
// };
// removeLastItem(["Red", "Green", "Blue"]);


// const replaceItem = (items, index, newValue) => {
//     items.splice(index, 1, newValue);
//     console.log(items);
// };
// replaceItem(["a", "b", "c"], 1, "x");


// const completeAll = (tasks) => {
//     for (let i = 0; i < tasks.length; i++) {
//         Object.assign(tasks[i], { done: true });
//     }
//     console.log(tasks);
// };
// completeAll([{ title: "A", done: false }]);

// const printEmailUsername=(email)=>{
//     const username = email.split("@").at(0);
//     console.log(username);
// };
// printEmailUsername("bold@example.com");

// const swapEnds = (items) => {
//     const first = items.shift();
//     const last = items.pop();
//     items.unshift(last);
//     items.push(first);
//     console.log(items);
// };
// swapEnds([1, 2, 3, 4]);
