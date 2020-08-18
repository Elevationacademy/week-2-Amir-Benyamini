// const createPerson = function(name, age){
// 	const person = {
// 		 personName: name, 
// 		 personAge: age
// 	}

// 	return person
// }

// let newPerson = createPerson("Elon", 42) //i have to stoe the return of the function inside of the variable in order to save it in memory, otherwise the function return the object and its deleted from memory.
// console.log(newPerson)


// const mathOperations = function(){
// 	const add = function(x, y){
// 		 return x + y
// 	}
// 	return add
// }

// const math = mathOperations()
// console.log(math(1,2))






// const foo = function () {
// 	const x = 1
 
// 	const bar = function () {
// 	  console.log(x) //notice this inner function using the outer function's variable
// 	}
 
// 	return bar
//  }
//  const baz = foo() //out here, x doesn't exist
//  baz() //but when we invoke baz, we're printing x!
 

//  Create a Family function with two variables inside its scope:
// A members array which starts empty
// A birth function
// The birth function should take one parameter, name, and push it to members, then log the updated array
// The Family function should return the birth function, but not the members array


// Call the Family function, store it in a giveBirth variable, then call giveBirth a few times.



// Mazel tov!

// const family = function(){
// 	const members = []

// 	const birth = function (name){
// 		members.push(name)
// 		console.log(members)
// 	}; 
// 	return birth
// }

// const giveBirth = family()

// giveBirth("amir")
// giveBirth("shani")
// giveBirth("eyal")

// const mathOperations = function () {
// 	const add = function (x, y) {
// 		 return x + y;
// 	}

// 	const subtract = function (x, y) {
// 		 return x - y;
// 	}

// 	const multiply = function (x, y) {
// 		 return x * y;
// 	}

// 	const divide = function (x, y) {
// 		 return x / y;
// 	}
// }


// Exercise 1

// Create a StringFormatter module. It should have two functions:

// capitalizeFirst - receives a string and returns the string with the first letter uppercased, and the next ones lowercased
// skewerCase - receives a string and replaces any spaces with a dash





// const StringFormatter = function(){
	
// const capitalizeFirst = function(string){
// 	const st = string
// 	const newString =st.charAt(0).toUpperCase() + 
// 	string.slice(1);
// 	 console.log(newString)
// 	 return capitalizeFirst
// }


// const skewerCase = function(string){
// 	const noSpace = string
// 	console.log(noSpace.replace(" ", "-"))
// 	return skewerCase
// }
// return{capitalizeFirst, skewerCase}

// }

// const formatter = StringFormatter()
// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box



// Exercise 2
// Create a Bank module. It should have a variable and two functions:



// A private money variable which starts off at 500
// A depositCash function which takes a cash parameter and uses it to increase money
// A checkBalance function which logs the money

// const Bank = function(){
// 	let _privetMoney = 500

// 	const depositCash = function(cash){
// 		  _privetMoney += cash
// 	}
// 		const checkBalance = function(){
// 		  console.log(_privetMoney)
		
// 		}

// 		return {deposit: depositCash,showBalance: checkBalance }
// }


// const bank = Bank()

// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950


let _memories = ["that time at band camp", "yesterday's breakfast"]
    
const Brain = function(){
    const dayDream = () => console.log(_memories)
    const experience = memory => _memories.push(memory)
    const forget = memory => _memories.splice(_memories.indexOf(memory), 1)
    const spazz = () => console.log("bleurg")

    return{
        reminisce: dayDream,
        live: experience,
        blank: forget,
        freakOut: spazz
    }
}

const brain = Brain()
brain.freakOut()
brain.reminisce()
