
/*Recap Exercise
You'll get to practice MVC more later, but for now - without looking at the code bits spread throughout this lesson
(the timeline example) - complete the following:



Create a simple pair of inputs and a submit button in your HTML
The inputs are name and text
Create a posts array with a few {name: ..., text:...} objects
Write a function called render that loops through posts and creates a simple div for each post
The loop should also add the div to somewhere on the HTML
Add an on("click") event to the button. When the button is clicked you should:
Grab the name and text from the inputs
Push a new object to the posts array with the name and text data
Call render again


Once you're done with that, you'll notice that whenever you add a new post, it will duplicate the entire list on the DOM - fix this.

This might be useful*/


const posts = [
	{ name: "Amir", text: "Happy birth day, wish you the best!" },
	{ name: "Ben", text: "Happy birth day, have a good one!" },
	{ name: "Yonatan", text: "I'm late in a day, but still.. happy birthday!" },
	{ name: "Noam", text: "Cheers!!!" }
]

var countRendered = 0;
const render = function () {
	for (let i = countRendered; i < posts.length; i++) {
		let post = posts[i];
		let name = post.name
		let text = post.text
		let postElm = $(`<div>${name}: ${text}</div>`)
		$("#posts").append(postElm)
		countRendered++
	}
}

render()

$("button").on("click", function(){
	let newPost = {
		name: $("#name").val(),
		text: $("#text").val()
	}
	posts.push(newPost)
	render()
})


// const input = "<input type=text placeholder=human-name>"
// const btn = "<button>add human</button>"

// $("body").append(input)
// $("body").append(btn)

// let addHuman = function () {

// 	let newHuman = $(`<li>${$("input").val()}</li>`)
// 	$("ul").append(newHuman)

// }

// $("button").on("click", function () {
// 	addHuman()
// })


// $("ul").on("click", "li", function () {

// 	$(this).remove()
// })



