//SELECTEUR

//click event
const questionContainer = document.querySelector(".click-event");
console.log(questionContainer);

questionContainer.style.borderRadius = "150px";
questionContainer.addEventListener("click", () => {
    console.log(questionContainer);
    // questionContainer.style.background = "red";
    // questionContainer.style.border = "3px solid teal";
questionContainer.classList.toggle("question-clicked")

})



