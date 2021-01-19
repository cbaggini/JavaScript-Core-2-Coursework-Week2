let blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", changeBlueStyle);

function changeBlueStyle() {
	document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#588fbd";
	document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "#ffa500";
	document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "black";
	document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "white";
}

let orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", changeOrangeStyle);

function changeOrangeStyle() {
	document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#f0ad4e";
	document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "#5751fd";
	document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "#31b0d5";
	document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "white";
}

let greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", changeGreenStyle);

function changeGreenStyle() {
	document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#87ca8a";
	document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "black";
	document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "#8c9c08";
	document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "black";
}

let submitButton = document.querySelector("form button");
submitButton.addEventListener("click", validateFields);

function validateFields(e) {
	e.preventDefault();
	let fields = [document.querySelector("#exampleInputEmail1"),
		document.querySelector("#example-text-input"),
		document.querySelector("#exampleTextarea")];
	for (i of fields) {
		if (i.id === "exampleInputEmail1" && !i.value.includes('@')) {
			i.value = "";
		}
		if (!i.value.length) {
			document.querySelector(`#${i.id}`).style.backgroundColor = "red";
		}
	}
	if (fields.every(el => el.value.length > 0)) {
		fields.map(el => {el.value = ""; el.style.backgroundColor = "white";});
		alert("Thank you for filling the form");
	}
	
}