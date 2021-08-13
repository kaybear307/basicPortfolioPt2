// if you prefer not to have multiple addEventListeners
// document.querySelectorAll(".button").forEach((button) => {
// 	button.addEventListener("click", function(event) {
// 		if (button.id === "resume") {
// 			openPDF()
// 		} else if (button.id === "addGoal") {
// 			addCareerGoal()
// 		} else {
// 			toggleDisplay(event)
// 		}
// 	})
// })

document.getElementById("home").addEventListener("click", toggleDisplay)
document.getElementById("about").addEventListener("click", toggleDisplay)
document.getElementById("portfolio").addEventListener("click", toggleDisplay)
document.getElementById("contact").addEventListener("click", toggleDisplay)
document.getElementById("resume").addEventListener("click", openPDF)
document.getElementById("addGoal").addEventListener("click", addCareerGoal)

function toggleDisplay(event) {
	document.querySelectorAll(".tab").forEach((tab) => {
		tab.style.display = "none"
		if (tab.classList.contains(event.target.id) === true) {
			tab.style.display = "block"
		}
	})
}

function openPDF() {
	// keep in mind that browser settings can override opening a PDF in a new tab; some people have their browser set to automatically download instead of open PDFs, and you cannot change their settings for them
	window.open("examplePDF.pdf")
}

let careerGoalsList = ["Get a fun job!", "Learn from co-workers"]

function renderCareerGoals() {
	// grab the element we want to render to
	let careerGoalsUl = document.getElementById("careerGoals")
	// clear out the current children inside the parent element to avoid duplicates in the parent element (careerGoalsUl)
	careerGoalsUl.innerHTML = ""
	careerGoalsList.forEach(goal => {
		let li = document.createElement("li")
		li.innerHTML = goal
		careerGoalsUl.append(li)
	})
}
renderCareerGoals()

function addCareerGoal() {
	let newGoal = document.forms["careerGoalsForm"]["newGoal"].value
	careerGoalsList.push(newGoal)
	renderCareerGoals()
	// this clears out the text inside the input textbox
	document.forms["careerGoalsForm"].reset()
}