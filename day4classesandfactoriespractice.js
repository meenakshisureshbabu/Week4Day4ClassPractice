class Hamster{
    owner = "";
    constructor(name){
        this.name = name;
    }
    price = 15;

    wheelRun(){
        console.log("squeak squeak")
    }
    eatFood(){
        console.log("nibble nibble")
    }
    getPrice(){
        return this.price;
    }
    setOwner(name){
        this.owner = name;
    }
}

class Person{
    constructor(name){
        this.name = name;
    }
    age = 0;
    height = 0;
    weight = 0;
    mood = 0;
    hamsters = [];
    bankaccount = 0;

    setAge(age){
        //this.age = age;
        for(let i=this.age;i<age;i++){
            this.ageUp();
        }
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(name){
        console.log("Greetings ",name);
    }
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        this.weight--;
    }

    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankaccount+=10;
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankaccount -= hamster.getPrice();
    }
    callEatOrExercise(numberoftimes,activity){
        for(let i=0;i<=numberoftimes;i++){
            if(activity.toLowerCase() == "eat")
                this.eat();
            else
                this.exercise();
        }
    }
}


const timmy = new Person("Timmy");
timmy.greet(timmy.getName());
timmy.setAge(5);
console.log(`${timmy.getName()}'s age is ${timmy.getAge()}`)
console.log(`${timmy.getName()}'s bank balance is ${timmy.bankaccount}`)
console.log(`${timmy.getName()}'s weight is ${timmy.weight}`)
timmy.callEatOrExercise(5,"eat");
timmy.callEatOrExercise(5,"exercise");
timmy.setAge(9);
console.log(`${timmy.getName()}'s age is ${timmy.getAge()}`)
console.log(`${timmy.getName()}'s bank balance is ${timmy.bankaccount}`)
console.log(`${timmy.getName()}'s weight is ${timmy.weight}`)
const pet = new Hamster("Gus");
pet.eatFood();
pet.wheelRun();
pet.setOwner(timmy.getName());
timmy.buyHamster(pet);
timmy.setAge(15);
console.log(`${timmy.getName()}'s age is ${timmy.getAge()}`)
console.log(`${timmy.getName()}'s bank balance is ${timmy.bankaccount}`)
console.log(`${timmy.getName()}'s weight is ${timmy.weight}`)
timmy.callEatOrExercise(2,"eat");
timmy.callEatOrExercise(2,"exercise");



class Dinner{
    constructor(appetizer,entree,dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}


class Chefs{


    makeDinner(appetizer,entree,dessert){
        const dinner = new Dinner(appetizer,entree,dessert);
        return dinner;
    }
}

const chef = new Chefs();
console.log(chef.makeDinner("Deviled Eggs","Hot dogs","Apple Pie"));
console.log(chef.makeDinner("Hogs in a blanket","Hamburger","Texas Sheet Cake"))
console.log(chef.makeDinner("Baked chicken wings","Chicken Casserole","Brownies"));




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//          VARIABLES AND DATATYPES
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  A. Q & A

//1. How do we assign a value to a variable?

let myname = "Meena";

//2. How do we change the value of a variable?

myname = "Suresh";

//3. How do we assign an existing variable to a new variable?

let new_name = myname;

//4. Remind me, what are declare, assign, and define?

let num; // declare
num = 10; // assign and define the variable

//5. What is pseudocoding and why should you do it?

// Psudocoding is the step by step solution explanation of a problem in simple English words. 
//It is helpful to program effectively to cover all the requirements and cover all the test cases without fail.

//6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// I think it should be 70% of time to be spent on how the problem to be solved. Remaining 30% should be done coding effectively.

// B. STRINGS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//1. Create a variable called firstVariable
let firstVariable;

//2. Assign it the value of the string "Hello World"
firstVariable = "Hello World";

//3. Change the value of this variable to some number

firstVariable = 10;

//4. Store the value of firstVariablein a new variable called secondVariable

let secondvariable = firstVariable;

//5. Change the value of secondVariableto any string.

secondvariable = "Television";

//6. What is the value of firstVariable?

console.log(firstVariable);// prints 10

//7. Create a variable called yourNameand set it equal to your name as a string. 
//Then, write an expression that takes the string "Hello, my name is " 
//and the variable yourNameso that it returns a new string with them concatenated.

let yourName = "Meenakshi";
let greetmyName = `Hello , my name is ${yourName}`;
console.log(greetmyName);// Prints "Hello, my name is Meenakshi"

//C. BOOLEANS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Using the provided variable definitions, replace the blanks so that all log statements print truein the console. 
//Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a+b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a*a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


  // D. THE FARM
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //1. Declare a variable animal. Set it to be either "cow" or something else

  let animal = "cow";

  //2.Write code that will print out "mooooo" if the it is equal to cow

  if(typeof animal == "string" && animal === "cow"){
    console.log("Mooooooooooo");
  }

  //3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."

  if(typeof animal == "string" && animal === "cow"){
    console.log("Mooooooooooo");
  }
  else{
    if(typeof animal == "string"){
        console.log("Hey ! You're not a cow");
    }
    else{
        console.log("Not a valid string")
    }
  }
  
  // E. DRIVERS'S ED

  //1. Make a variable that holds a person's age; be semantic

  let age_num = 16;

  //2. Write code that will print out "Here are the keys!", 
  //if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

  if(typeof age_num == "number" && age_num >= 16){
    console.log("Here are the keys!");
  }
  else{
    if(typeof age_num == "number"){
        console.log("Sorry, you're too young.")
    }
    else{
        console.log("Not a valid number");
    }
  }


  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                      LOOPS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// A. THE BASICS
//------------------------------------

//1. Write a loop that will print out all the numbers from 0 to 10, inclusive

for(let counter=0;counter<=10;counter++){
    console.log(counter);
}

//2. Write a loop that will print out all the numbers from 10 up to and including 400

for(let counter=10;counter<=400;counter++){
    console.log(counter);
}

//3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

 for(let counter=12;counter<4000;counter+=3){
         console.log(counter);
 }

// B. GET EVEN
//-----------------------------------------------------------------

//1. Print out the numbers that are within the range of 1 - 100

for(let counter = 0;counter<= 100;counter++){
    if(counter%2 == 0){
        console.log(counter);
    }
}

//2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"


for(let counter = 0;counter<= 100;counter++){
    if(counter%2 == 0){
        console.log(`${counter} is an even number`);
    }
}

//  C. GIVE ME FIVE
//----------------------------------------------------------------------------

//1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
//2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

for(let counter = 0;counter<=100;counter++){
    if(counter%5 ===  0){
        console.log(`I found a ${counter}. High five!`);
    }
    if(counter%3 === 0){
        console.log(`I found a ${counter}. Three is a crowd`);
    }
}



// D. SAVINGS ACCOUNT
//----------------------------------------------------------------------

//1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account

let bank_account = 0;
for(let counter=0;counter<=10;counter++){
    bank_account += counter;
}
console.log(`$${bank_account}`);

//2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

let bank_account_bal = 0;
for(let counter=1;counter<=100;counter++){
    bank_account_bal += counter;
}
console.log(bank_account_bal*2);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//                  ARRAYS AND CONTROL FLOW

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  A. TALK ABOUT IT
//-------------------------------------------------------------------------------------

//1. What are the things in an array called? 
// They are called elements

//2. Do Arrays guarantee those things will be in order?
// Yes. Array maintains an order

//3. What real-life thing could you model with an array?
// A book shelf with books arranged in it, where a book shelf is an array of books.

//  B. EASY DOES IT
//-------------------------------------------------------------------------------------

//1. Create an array that contains three quotes and store it in a variable called quotes

let quotes = ["Way to go!","Great Work","Keep trying!"]

// C. ACCESSING ELEMENTS
//-------------------------------------------------------------------------------------

const randomThings = [1, 10, "Hello", true];

//1. How do you access the 1st element in the array?

console.log(randomThings[0]);

//2. Change the value of "Hello"to "World"

randomThings[2] = "World";


//3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);


// D. CHANGE VALUES
//-------------------------------------------------------------------------------------

//1. What would you write to access the 3rd element of the array?

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

console.log(ourClass[2]);

//2. Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat";

//3. Add a new element, "Cloud City" to the array

ourClass.push("Cloud City");

console.log(ourClass)

// E. MIX IT UP
//-------------------------------------------------------------------------------------

//1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
const myArray = [5, 10, 500, 20]
myArray.push("Aegon","MynewString");
console.log(myArray);

//2. Remove the 5from the beginning of the array.

myArray.shift();
console.log(myArray)

//3. Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

//4. Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray)

//5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
console.log(myArray.reverse());
console.log(myArray); // Yes the reverse method mutate the original array and return the same reference of the original array. Mutate means the methos that will modify the original element. 


// F. BIGGIE SMALLS
//------------------------------------------------------------------------------

//1. console.log()s "little number" if the number is entered is less than 100
let int_var = 10;
if(typeof int_var === "number" && int_var < 100){
    console.log("Little number");
}
else{
    if(typeof int_var === "number" && int_var >= 100)
    {
        console.log("Big Number");
    }
    else{
        console.log("Not a valid number");
    }
}

// G. MONKEY IN THE MIDDLE

//----------------------------------------------------------------------------------------------------

let monkey_number = 11;
if(typeof monkey_number === "number" && monkey_number < 5){
    console.log("Little number");
}
else if(typeof monkey_number === "number" && monkey_number > 10){
    console.log("Big Number");
}
else{
    console.log("Monkey");
}


// H. WHAT'S IN YOUR CLOSET?
//-------------------------------------------------------------------------

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  // 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

  //2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

  kristynsCloset.splice(6,0,"Raybans");
  console.log(kristynsCloset);

  //3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

  kristynsCloset[5] = "Stained Knit hat";
  console.log(kristynsCloset);

  //4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
  console.log(thomsCloset[0][0]);

  //5. In the same way, access one item from Thom's pants array.
  console.log(thomsCloset[1][1]);

  //6. Access one item from Thom's accessories array.
  console.log(thomsCloset[2][1]);

  //7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

  console.log(`Thom is looking handsome in a ${thomsCloset[0][2]},${thomsCloset[1][1]} and ${thomsCloset[2][2]}`)

  //8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

  thomsCloset[1][2] = "Footie Pajamas";
  console.log(thomsCloset);


  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                  FUNCTIONS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// A. PRINTGREETING
//---------------------------------------------------------------------------------

//1. Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

function printGreeting(param_name) {
    return `Hello there, ${param_name}`;
  }
  console.log(printGreeting("Myfriend"));
  
  //B. PRINT COOL
  //--------------------------------------------------------------------------------------
  
  printcool = (param_name) => {
    return `${param_name} is cool`;
  };
  console.log(printcool("My Friend"));
  
  //C. CALCULATE CUBE
  //-------------------------------------------------------------------------------------
  function calculatecube(side) {
    return Math.pow(side, 3);
  }
  console.log(calculatecube(3));
  
  //D. isVowel
  //-------------------------------------------------------------------------------------
  //Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
  const isVowel = (single_char) => {
    let vowelarray = ["a", "e", "i", "o", "u"];
    if (typeof single_char == "string" && single_char.length === 1) {
      if (vowelarray.includes(single_char.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Enter a valid character";
    }
  };
  
  console.log(isVowel("A"));
  
  //E. GET TWO LENGTHS
  //---------------------------------------------------------------------------------------------------
  
  //Write a function getTwoLengthsthat accepts two parameters (strings).
  //The function should return an array of numbers where each number is the length of the corresponding string.
  
  function getTwoLengths(first_string, second_string) {
    let array_lengths = [];
    if (typeof first_string === "string" && typeof second_string === "string") {
      array_lengths.push(first_string.length, second_string.length);
      return array_lengths;
    } else {
      return "Please enter a valid string";
    }
  }
  
  console.log(getTwoLengths("Meenakshi", "Suresh"));
  
  //F. GET MULTIPLE LENGTHS
  //------------------------------------------------------------------------------------------------------------
  
  //Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings.
  //The function should return an array of numbers where each number is the length of the corresponding string.
  
  const getMultipleLengths = (string_arr) => {
    let array_lengths = [];
    for (string_element of string_arr) {
      if (typeof string_element === "string") {
        array_lengths.push(string_element.length);
      } else {
        array_lengths.push("Not a string");
      }
    }
    return array_lengths;
  };
  console.log(getMultipleLengths(["Hi", "This", "is", "Meenakshi", 2]));
  
  //G. MAX OF THREE
  //------------------------------------------------------------------------------------------
  
  //Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them.
  const maxOfThree = function (num1, num2, num3) {
    if (
      typeof num1 == "number" &&
      typeof num2 == "number" &&
      typeof num3 == "number"
    ) {
      return num1 > num2 && num1 > num3
        ? num1
        : num2 > num1 && num2 > num3
        ? num2
        : num3;
    } else {
      return "Not a valid number(s)";
    }
  };
  
  console.log("The maximum number is :" + maxOfThree(3, 2, 4));
  
  //H. PRINT LONGEST WORD
  //--------------------------------------------------------------------------------------------
  
  //Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array.
  
  const longestStringInArray = function (...str) {
      let longString = str[0];
      for(let i=0;i< str.length;i++){
          if(str[i].length > longString.length){
              longString = str[i];
          }
      }
      return longString;
    };
    console.log(
      "The longest string of the array is :" +
        longestStringInArray("Meena", "MERN", "JPMorgan", "Javascript")
    );
  
    

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                  OBJECTS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//A. MAKE A USER OBJECT
//-----------------------------------------------------


//Create an object called user.
//Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
const user = {"name":"Meena","email":"meenakshi.pradev@gmail.com","age":36,"purchased":[]};
console.log(user);

//B. UPDATE THE USER
//------------------------------------------------------
//Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
//Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.email = "meenakshi@gmail.com";
user.age++;
console.log(user);

//C. ADDING KEYS AND VALUES
//------------------------------------------------------

//Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = "Jersey City";
console.log(user);


//D. SHOPAHOLIC
//-----------------------------------------------------
//Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
//Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
//Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
//Console.log just the "Merino jodhpurs" from the purchasedarray.
user.purchased.push("Carbohydrates","Peace of Mind","Merino Jodhpurs");
console.log(user.purchased[2])

//E. OBJECT WITHIN OBJECT
//-----------------------------------------------------
//1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name:"Tree",
    age:80,
    location:"New York",
    purchased:[]
}

//2. Console.log just the friend's name
console.log(user.friend.name)

//3. Console.log just the friend's location
console.log(user.friend.location)

//4. CHANGE the friend's age to 55
user.friend.age = 90;
console.log(user)

//5. The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
//6. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.

user.friend.purchased.push("The One Ring","A latte");
console.log(user)

//7. Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1])

// F. LOOPS
//-----------------------------------------------------------------------------------------

//1. Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
user.purchased.forEach((item) => {
    console.log(item);
})

//2. Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
user.friend.purchased.forEach((item) => {
    console.log(item);
})

// G. FUNCTIONS CAN OPERATE ON OBJECTS
//---------------------------------------------------------------------------------------------
//1. Write a single function updateUserthat takes no parameters. When the function is run, it should:
//increment the user's age by 1
//make the user's name uppercase

function updateUser(){
    user.age++;
    user.name = user.name.toUpperCase();
}
updateUser();
//console.log(user);


//2. Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of 
//hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object 
//that is passed in as an argument when the function is called. 
//Call your oldAndLoudfunction with useras the argument.

function oldAndLoud(person){
    person.age++;
    person.location = person.location.toUpperCase();
}
oldAndLoud(user);
console.log(user);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//          CAT COMBINATOR
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1. MAMA CAT

//---------------------------------------------------------------------------------
//Define an object called cat1that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

const cat1 = {catname:"Kittny",breed:"Persian", age:5};
console.log(cat1.age);
console.log(cat1.breed);

// 2. PAPA CAT

//-----------------------------------------------------------------------------------
// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)

const cat2 = {catname:"Pappy",breed:"Siamese",age:6}


// 3. COMBINE CATS

//Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

//Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.

const combineCats = (mama,papa) => {
    console.log(mama);
    console.log(papa);
}

combineCats(cat1,cat2);

//Make it so the combineCatsfunction will return a combination of the two incoming cats

// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between

const combineCatsJoin = (mama,papa) => {
    const combined_obj = {
        catname : mama.catname+papa.catname,
        age :1,
        breed: mama.breed+"-"+papa.breed
    }
    return combined_obj;
}

console.log(combineCatsJoin(cat1,cat2));


//4. CAT BRAIN BENDER

//If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:
//catCombinatorcan use itself as its own argument.

console.log(combineCatsJoin(combineCatsJoin(cat1,cat2),combineCatsJoin(cat1,cat2)))
//Write a console.log that is three levels deep of combineCats. 
//combineCats should have two arguments, each which are combineCats, 
//each which have two arguments, each which are combineCats.
console.log(combineCatsJoin(combineCatsJoin(combineCatsJoin(cat1,cat2),combineCatsJoin(cat1,cat2)),combineCatsJoin(combineCatsJoin(cat1,cat2),combineCatsJoin(cat1,cat2))));
  