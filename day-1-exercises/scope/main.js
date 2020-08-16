//===================================================================================
//Section 1
//===================================================================================
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}


// console.log("Damn, you see this gal? She ran " + distance + " miles")   

// What will console log? -- first console log will print "Finished running 8 miles" second one will print undefined.
// Will there be an error? -- yes
// Why? because we cant concatenating the strings with undefined variable.
// Will something be undefined? -- yes
// Why? -- because the second  console log is trying to accesss distance variable that exists in the local scop of the if statment and undefined on the global scope.
// To what scope does each variable belong?
// Global or local? If local, to which specifically? -- the run variable is a global scope and the distance variable is a local scope of the if statement.
    //===================================================================================//Section 2//===================================================================================
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}


// What will console log? -- error cowSound undefined
// Will there be an error? -- yes
// Why? -- because cowSound variable is undefiend at the local scope of the else statment when we try to console log it and we cant concatenating undefined with strings.
// Will something be undefined? -- yes, cowSound will be undefined
// Why? -- because its exists inside the if statment scope and dosn't exist in the else statmnet scope
// To what scope does each variable belong? -- the cowSound variable is belonge to the if statment local scope.
// Global or local? If local, to which specifically? -- local only
//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)

// What will console log? -- first ""Served a special (each of the allOrders arry) and second "Finished serving all the orders: (all  of the allOrders arry) "
// Will there be an error? -- no
// Why? because everything is ok regarding the scopes
// Will something be undefined? -- no
// Why? -- because everything is ok regarding the scopes
// To what scope does each variable belong? -- the serveOrder function variable is a global scope, the order & specialOrder is a local scope of the for of loop and allOrders variable of the arry is a global scope.
// Global or local? If local, to which specifically?
//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()

// What will console log? --undefined
// Will there be an error? --yes
// Why? --because seed is not defiend and therfor we cant concatenating it with strings.
// Will something be undefined? --yes, seed will be undefined.
// Why? --because seed is a variable inside the local scope of the getSeed function and we cant call it inside plant function which it not exists.
// To what scope does each variable belong? --pot variable is a global scope, getSeed variable of the function is a global scope, seed variable is a local scope of the getSeed function, plant variable of the function is a global scope.
// Global or local? If local, to which specifically?
//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}
// What will console log? -- undefined
// Will there be an error? -- yes
// Why? -- because the return found is outside the loop local scop and therfor it dosnt get the value of true.
// Will something be undefined? -- yes the found variable that the function outputs.
// Why? -- because its outside the local scop of the loop where the found variable was declared.
// To what scope does each variable belong? --  
// Global or local? If local, to which specifically? -doesUserExist & userExists is a global scope, users is a local scope of the function, u is a local scope for the loop and found is a local scope for the if statment.

//===================================================================================
//Section 6 - Optional (if you have time)
// //===================================================================================
let isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()

if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}


// // What will console log? "Finally, sheesh"
// // Will there be an error? no
// // Why? 
// // Will something be undefined? no 
// // Why?
// // To what scope does each variable belong? --isEnough is a global scope, makeEnough variable of the function is a global scope, i variable is a local scope of the loop.
// // Global or local? If local, to which specifically?