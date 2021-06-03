//SELECTEUR

//click event
const questionContainer = document.querySelector(".click-event");
//console.log(questionContainer);
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
//console.log(btn1, btn2);
const response = document.querySelector("p");
//console.log(response);

questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener("click", () => {
  //console.log(questionContainer);
  // questionContainer.style.background = "red";
  // questionContainer.style.border = "3px solid teal";
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// --------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(-15deg)";
});

//---------------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  //console.log(e.key);
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (e.key === "z") ring(e.key);
});

//-------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//--------------------------------------------------
// Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener('input', (e) => {
  pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
  language = e.target.value;
});

form.addEventListener('submit', (e) => {
  e.preventDefault;

  if (cgv.checked) {

  } else {
    alert("Veuillez accepter les conditions gnérales de vente")
  }
});

