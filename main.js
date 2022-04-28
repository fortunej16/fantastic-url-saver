let myLeads = []
let btnE = document.getElementById("btn")
let words = document.getElementById("in")
let line = document.getElementById("ul")

let clear = document.getElementById("clr")

words.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		event.preventDefault()

		btnE.click()
	}
})
btnE.addEventListener('click', function(){
				myLeads.push(words.value)
				
				words.value = ""
				localStorage.setItem("Links", JSON.stringify(myLeads))

				render()
				slide()
})


clear.addEventListener("click", function(){
	words.value = ""
	slide()
})

let del = document.getElementById("del")

del.addEventListener("click", function(){
	localStorage.clear()
	myLeads = []
	render()
	slide1()
})

function render() { 
	let listitems = "";
				for(let i =0; i<myLeads.length; i++){
				//listitems += "<li><a target = '_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
				
				listitems += `<li>
								<a target = '_blank' href = '${myLeads[i]}'>
												${myLeads[i]}
								</a>
				</li>`
}

ul.innerHTML = listitems

}

let Leads = JSON.parse(localStorage.getItem("Links"))

if (Leads) {
	myLeads = Leads
	render()
}


var firstPicture = document.getElementById("first")
var secondPicture = document.getElementById("second")

function slide() {
	firstPicture.style.display = "none"
	secondPicture.style.display = "block"
}


function slide1(){
	firstPicture.style.display = "block"
	secondPicture.style.display = "none"	
}

/*let element = document.getElementById("container")

element.innerHTML = "<button onclick='buy()'>" + "Buy!" + "</button> <p id = 'p'></p>"

function buy(){
			element.innerHTML += "<p>Thanks for buying</p>"
}*/

// const name = "James"

// let message = `Hey ${name} how are you?`

// console.log(message)