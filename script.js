const arrowDown= document.querySelector(".card-body");
arrowDown.addEventListener("click", (e) =>{
	const allQuestions=document.querySelectorAll(".question > h2");
	const allAnswers=document.querySelectorAll(".answer");
	const allArrows= document.querySelectorAll(".learnMore");

	const arrow = e.target;
	const answer = e.target.parentNode.parentNode.children[1];
	const question = (e.target.parentNode.children[0]);

	if (e.target.className === "learnMore arrow-reverse" ){
		console.log("paima pirma")
		allAnswers.forEach(answer => answer.classList.remove("show"));
		allQuestions.forEach(question => question.classList.remove("active"));
		allArrows.forEach(arrow => arrow.classList.remove("arrow-reverse"));
		return;
	}

	if (e.target.className === "learnMore") {
		console.log("paima antra")
		allAnswers.forEach(answer => answer.classList.remove("show"));
		allQuestions.forEach(question => question.classList.remove("active"));
		allArrows.forEach(arrow => arrow.classList.remove("arrow-reverse"));

		arrow.classList.add("arrow-reverse");

		answer.classList.add("show");

		question.classList.add("active");
	}
})