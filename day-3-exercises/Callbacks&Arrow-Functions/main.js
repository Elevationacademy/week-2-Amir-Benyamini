// let users = []

// const getData = function (func) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
// 		  console.log("Got users")
// 		  func()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)



 
// const square = num =>console.log(num*num) 

// square(4)


// const getFormalTitle = (title, name) => title +" "+ name


// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

// Exercise 1 - Callbacks - Write a function pushPull that takes one argument - a function - and invokes that function

// const push = function () {
// 	console.log("pushing it!")
//  }
 
//  const pull = function () {
// 	console.log("pulling it!")
//  }
//  const pushPull = function (func){
// 	func()
//  }

//  pushPull(push) //should print "pushing it!"
//  pushPull(pull) //should print "pulling it!"

//  Exercise 2 - Callbacks - Create a function called getTime that takes one parameter - a function - then calls it with an argument.

// const returnTime = function (time) {
// 	alert('The current time is: ' + time)
//  }
//  const time = new Date()


//  const getTime = function (timefunc){
// 	 timefunc()
//  }

//  getTime(returnTime(time))
 
//  Exercise 3- Callbacks - do not change any of the code above. You only need to add something to make this work. Remember, alert is a built-in function in JS.

// const logData = function(data){
// 	console.log(data)
// }

// const displayData = function (alertDataFunc, logDataFunc, data) {
// 	alertDataFunc(data);
// 	logDataFunc(data);
//  };
 
//  displayData(alert, logData, "I like to party")
 

//  Exercise 4 - Arrow Functions - Create an arrow function that receives three parameters and returns their sum - it should be one line.

// const GetSum = (x,y,z) => x +y +z

// console.log(GetSum(1, 2, 3))


// Exercise 5 - Arrow Functions - Create an arrow function called capitalize that receives any string, and returns it with proper capitalization:

const capitalize = (str) => {
	let firstLatter = str.slice(0, 1)
	let firstLatterUP = firstLatter.toUpperCase()
	let restOfSentance = str.slice(1, str.length)
	let restOfSentanceLC = restOfSentance.toLowerCase()

	return firstLatterUP + restOfSentanceLC
}

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia

// Exercise 6 - Arrow functions

// Create a one-line arrow function called commentOnWeather that takes one parameter, temp. It should call determineWeather and return the concatenation of "It's " and determineWeather's output:

const determineWeather = temp => {
	if(temp > 25){
	  return "hot"
	}
	return "cold"
 } 

 const commentOnWeather = temp => "It's " + determineWeather(temp)


console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"

//  Exercise 7 Study the code in the image above, think about what you expect to happen, and then complete the HTML to make the code work.




 const explode = (lightFunc, soundFunc, sound) => {
	lightFunc()
	soundFunc(sound)
 }
	 
 const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
	 
 const makeSound = sound => alert(sound)
	 
 explode(shineLight, makeSound, "BOOM")
 
 
