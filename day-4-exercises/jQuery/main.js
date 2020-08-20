// const header = $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("li:first-child").css("color","green")
// $("li:last-child").css("color","pink")
// $("#brown-div").css("color", "brown")
// $("#b1").addClass("box")
// $("#b2").addClass("box")
// $('#my-input').val("Terabyte")

// const color = $("div").data().color  
// console.log(color)


// const data = $("div").data()
// console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate)

// const changeColor = function(){

// }

// $("#event").hover(function (){

// 	$("#event").css("background-color", "lightblue")
// })


// $("button").on("click", function(){
// 	alert($("#my-input").val())
// })


// $(".box").hover(function(){

// 	$(this).css("background-color", "darkred")

// })




// $(".feedme").on("click", function(){
// 	let divCopy = `<div class=feedme> ${$(this).text()} </div>`
	
// 	$("body").append(divCopy)
//  })
 

//  Given the following array, create a <div class='human'>FIRST_NAME - LAST_NAME</div> for each item, and add it to body
//  const names = [
// 	{ first: "Alex", last: "Johnson" },
// 	{ first: "Byron", last: "Loveall" },
// 	{ first: "Cassandra", last: "Wuthers" },
// 	{ first: "Deandre", last: "Rahm" },
// 	{ first: "Ellena", last: "Freeman" }
//  ]
 

//  for(let name of names){
// 	$("body").append(`<div>${name.first} ${name.last} lol</div>`)
	
// }


// dd an element with some text in the HTML.

// Then, using jQuery, when the user hovers over the element - it should be removed from the page. Poof!



// $("#plague").hover(function(){
// 	$("#plague").remove()
// })



// Alter the above code from the previous Spot Check so that it only changes the text of the clicked blog.

// $("button").on("click", function(){
// 	$("#blogs").append("<div class='blog'>Cool blog</div>")
//  })
 
//  $("#blogs").on("click", ".blog", function(){
// 	$(".blog").text("blargh") 
//  })
 


/* Exercise 1 - a. create an input with a add human button,
b.then make a click event listner that will add list item with the input inside the un-ordered list.
c. then make a click event listner that will delete list item when clicked ( use this and dynamic event listner)
*/

const input = "<input type=text placeholder=human-name>"
const btn ="<button>add human</button>"

$("body").append(input)
$("body").append(btn)

let addHuman =function(){

		let newHuman = $(`<li>${$("input").val()}</li>`)
		$("ul").append(newHuman)
		
		}

$("button").on("click", function(){
	addHuman()
})


$("ul").on("click", "li", function(){

	$(this).remove()
})
