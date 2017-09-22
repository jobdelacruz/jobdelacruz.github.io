//Basic Java Script
alert("Welcome to Java script")
//Testing if scriptworks
document.write("script is loaded");
// CHanging title form HELLO WORLD to SUCCESS
document.getElementById("my-title").innerHTML = "Success";

// Console log message for developers
console.log("Script loaded");
// In javascript the HTML document is called "document".
console.log("the HTML document is: ", document);
//selecting a unique <element> by getting its id
console.log("my-title element is: ",document.getElementById("my-title"));
//selecting multiple <element>s by getting their shared class name
console.log("my-class elements are: ", document.getElementsByClassName("my-class"))

//Variables

//First Sample
var x = 8;
var y = 12;
var z = x + y;
document.getElementById("my-Zvalue").innerHTML = z;
//String
var myName = "Jobs";
console.log(myName);    
document.getElementById("my-Name").innerHTML = myName;
//The Assignment Operator
/* In JavaScript, the equal sign (=) is an "assignment" operator, 
not an "equal to" operator. */
var x1 = 5;
x1 = x1 + 5; 
console.log(x1);
// x is now 10
document.getElementById("my-Xvalue").innerHTML = x1;

//Exercise

// number: is used for arithmetic
var age = 50;
var yearsToRetirement = 75 - age;
// string: is used for textual data
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName; //John Doe

// Excersise
var student1 = "Zhi Min";
var student2 = "Job";
var students = student1 + " & " + student2;
document.getElementById("my-Students").innerHTML = students;
console.log(students);

//03.01.ex.s Self Exercises
// String should be encapsulated in quotes
var mystring = "This is a statement.";
console.log (mystring)

// Variable names are case-sensitive. Typo error in (0.5*basetri*heightTri).
var baseTri = 5;
var heightTri = 8;
var areaTri = 0.5*baseTri*heightTri;
console.log("The area of a right angle triangle with base " +
baseTri + " and height " + heightTri + " is " + areaTri)
// The left side of the first + operator is a string.
// Hence it will treat all the expression to the right as string too
// 567 is the result of string concatenation
// Adding brackets around the variables will allow length1,
var length1 = 5;
var length2 = 6;
var length3 = 7;
var perimeterL123 = (length1+length2+length3);
console.log("The perimeter of this triangle is " + perimeterL123);
// Variable names are case-sensitive
// Typo error on (resultFromsubtraction = x - y;)
var resultFromsubtraction;
var x = 50;
var y = 40;
resultFromsubtraction = x-y;
console.log("The result from subtraction is " + resultFromsubtraction);
// ((oneNum/2) == 1)) means 521 divided by 2 is 1
// Hence it evaluates to false
// Correct operator to use is % (modulus operator)
// ((oneNum % 2) == 1)) means 521 divided by 2 will give a reminder of 1
// This evaluates to true and 521 is an odd number
var oneNum = 521;
var resultX =  (oneNum/2) == 1;
console.log(resultX);
resultX = (oneNum%2) == 1;
console.log(oneNum + " is an odd number. true or false? " + resultX);

//Functions

function myMultiplicationFunction (p1, p2) {
    return p1*p2; // The function returns the product of p1 and p2
}
resultX = myMultiplicationFunction(5,8);
console.log(resultX);

//Conditions

//If statement
var nNum = 5;
if (nNum<10) {console.log("nNum is less than 10")};
if (nNum<3) {console.log("nNum is less than 10")}; // (5<3) is false. It will not run the code
var mytime = 9;
if (mytime < 12){
    document.write("<br>" + " good moring");  
}
//if-else statement
var a = 5;
var b = 7;
if((a - b) > 0){
    console.log("The result is a positive number.");
}
else {
    console.log("The result is a negative number.");
}
// if-else statement Time sample
var time = 9;
if (time < 12){
    document.write('good morning');
} else {
    document.write('good afternoon');
}
// else if statement
var p = 8;
var q = 7;
var r = 4;
var s = 5;
if (s > p){
    console.log("s is the largest.");
}
else if (s > q){
    console.log("s is the second largest.");
}
else if (s > r){
    console.log("s is the third largest.");
}
else {
    console.log("s is the smallest.");
}
// else if statement  Time sample
var time = new Date().getHours();
document.write(time + ' hours <br>');
if (time < 12){
    document.write('good morning');
} else if (time < 18){
    document.write('good afternoon');
} else {
    document.write('good evening');
}

// Arrays

// An array is a special variable, 
//which can hold more than one value at a time.
// Below is a normal convention of writing list
var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";
//Instead you can write it as below example
var cars = ["Saab", "Volvo", "BMW"];
//exmaples
var eggTray = ["orangeEgg","blueEgg","purpleEgg","redEgg"];
var first = eggTray[0];
console.log(first); //orangeEgg
var last = eggTray[3];
console.log(last); //redEgg
var traySize = eggTray.length;
console.log(traySize); // 4 which is the total number of list in the array
var last = eggTray[eggTray.length-1];
console.log(last); //redEgg
//In JavaScript, you can store values with different data types into an array.
var fandyInfo = ["Fandy", "male", 25];
console.log(fandyInfo[0] + " is aged " + fandyInfo[2] + " and he is a " + fandyInfo[1] + ".");
// Add entry in an array list - Array.push("entry to add")
eggTray = [];
eggTray = ["orangeEgg","blueEgg","purpleEgg","redEgg"];
eggTray.push("greenEgg");
console.log(eggTray); //green egg added in the list
//Remove the last element from the array: pop()
eggTray = [];
eggTray = ["orangeEgg","blueEgg","purpleEgg","redEgg"];
eggTray.pop();
console.log(eggTray); //green egg remove in the list
//Add an additional element to an array: unshift()
eggTray = [];
eggTray = ["orangeEgg","blueEgg","purpleEgg","redEgg"];
eggTray.unshift("greenEgg");
console.log(eggTray); //green egg add in the list as 1st entry
//Remove an additional element from an array: shift()
eggTray = [];
eggTray = ["orangeEgg","blueEgg","purpleEgg","redEgg"];
eggTray.shift();
console.log(eggTray); //green egg remove in the list
//Remove/ Add elements anywhere in the array: splice()
//array.splie(index,numItemsTODelete,itemToInsert) add/removes in between
eggTray = [];
eggTray = ["orangeEgg","blueEgg","purpleEgg","redEgg"];
eggTray.splice(2,0,"greenEgg");
console.log(eggTray); // Add grren egg in the 2nd index of an array

//Iterations (Loops)

//Loops can execute a block of code a number of times.
//Loops are handy, if you want to run the same code over and over again, each time with a different value.
var cars = ["Volvo", "Toyota", "Honda", "Mitsubishi", "Chevy","Ford"];
//Often this is the case when working with arrays:
// text += cars[0] + "<br>";
// text += cars[1] + "<br>";
// text += cars[2] + "<br>";
// text += cars[3] + "<br>";
// text += cars[4] + "<br>";
// text += cars[5] + "<br>";
//We can instead write:
var text;
for(i=0; i < cars.length; i++) {
    text = cars[i];
    console.log(text);
}

//Objects
var student = {
    name:"Job",
    age: 20,
    marks: [85,90,87,99,92],
    subjects: ["English,Math,Science,Drafting,Programming"],
    average: 0,
    young: false,
    welcomeF: function (){
        console.log("Welcome to my JS Script")
    },
    bmi: {
        height: 200,
        weight: 70
    }
}
//Access the value name "property" from students object
console.log(student.name)

student.avg = 70
var mymarks_list = student.marks

var no_of_items = mymarks_list.length
var index = 0
var total = 0

while(index < mymarks_list.length) {
    total = total + mymarks_list[index]
    index++
}

var average = total / no_of_items
student.avg = average

//Sample Object with multiple
var students = {
    count: 2,
    data: [
        //Objects
        student = {
            name:"Pam",
            age: 20,
            marks: [85,90,87,99,92],
            subjects: ["English,Math,Science,Drafting,Programming"],
            average: 0,
            young: false,
            welcomeF: function (){
                console.log("Welcome to my JS Script")
            },
            bmi: {
                height: 200,
                weight: 70
            }
        },
        //Objects
        student = {
            name:"Job",
            age: 18,
            marks: [85,90,87,99,92],
            subjects: ["English,Math,Science,Drafting,Programming"],
            average: 0,
            young: false,
            welcomeF: function (){
                console.log("Welcome to my JS Script")
            },
            bmi: {
                height: 200,
                weight: 70
            }
        }
    ]
    
}

var averageAge = 0
var agelist = students.data

var no_of_items = students.data.length
var index = 0
var total = 0

while(index < agelist.length) {
    total = total + agelist[index].age
    index++
}

var averageAge = total / no_of_items
console.log(averageAge)