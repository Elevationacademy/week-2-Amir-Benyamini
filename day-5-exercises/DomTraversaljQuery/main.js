// Given the following HTML, write some code that prints the text inside the correct span element when the relevant Print button is clicked:

// $("button").on("click", function(){
// let text = $(this).closest("div").find("span").text()
// 	console.log(text)
// })


// $("bottun").on("click", function(){
// let print = $(this).siblings(".container").find("p").text()
// 	console.log(print)
// })


// When the generator button is clicked, you should console log the following values for its computer:



// The processor ID
// The computer's data-id - also, push this to an array in an object like this: {cmp_id: id}
// The BUS number

const dataArr = []

$(".generator").on("click", function(){
	let genBtn = $(this)
	let proDiv = genBtn.closest(".processor")
	let proData = proDiv.attr("id")
	console.log(proData)

	let compDiv = genBtn.closest(".computer")
	let compData = compDiv.data().id
	console.log(compData)
	dataArr.push({cmp_id: compData})

	let busElm = compDiv.find(".BUS").text()
	console.log(busElm)

	console.log(dataArr)



})

// When the validator button is clicked, you should console log the following values for its computer:



// The generator's text
// The MB
// Both QRs

$(".validator").on("click", function(event){
	let valBtn = $(this);
	let valCompt = valBtn.closest(".computer")
	let generator=valCompt.find(".generator");
	let generatorT = generator.text();

	console.log(generatorT)

	
	let mbText =valCompt.find(".MB").text()
	console.log(mbText)

	let firstQR = valCompt.find(".processor").children()
	// let lastQR = alCompt.find(".processor:last-child").text()
	// let qrText = qr.text()
	console.log(firstQR)
	// console.log(lastQR)


	
})