console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const chinaTile = document.querySelector("#China");
const indiaTile = document.querySelector("#India");
const americaTile = document.querySelector("#America");
const indonesiaTile = document.querySelector("#Indonesia");
const pakistanTile = document.querySelector("#Pakistan");
const brazilTile = document.querySelector("#Brazil");
const nigeriaTile = document.querySelector("#Nigeria");
const bangladeshTile = document.querySelector("#Bangladesh");
const russiaTile = document.querySelector("#Russia");
const mexicoTile = document.querySelector("#Mexico");

let score = 0;

console.log(chinaTile);
console.log(indiaTile);
console.log(americaTile);
console.log(indonesiaTile);
console.log(pakistanTile);
console.log(brazilTile);
console.log(nigeriaTile);
console.log(bangladeshTile);
console.log(mexicoTile);

// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");
console.log(inputField);

inputField.addEventListener("change", (e) => {
  const guess = inputField.value.toLowerCase();
  if (guess === "china") {
    console.log("User typed in china")
if (chinaTile.classList.contains("hidden")) {
     score++;
    console.log(score);
  }
    chinaTile.classList.remove("hidden");
  }
  
  else if (guess === "india") {
    console.log("User typed in india")
  if (indiaTile.classList.contains("hidden")) {
     score++;
    console.log(score);
  }
    indiaTile.classList.remove("hidden");
  }
  
  else if (guess === "america" || guess === "united states" || guess === "united states of america" || guess === "usa" || guess === "us") {
    console.log("User typed in america")
  if (americaTile.classList.contains("hidden")) {
     score++;
    console.log(score);
  }
    americaTile.classList.remove("hidden");
  }
  
  else if (guess === "indonesia") {
    console.log("User typed in indonesia")
  if (indonesiaTile.classList.contains("hidden")) {
     score++;
    console.log(score);
  }
    indonesiaTile.classList.remove("hidden");
  }
  
  else if (guess === "pakistan") {
    console.log("User typed in pakistan")
  if (pakistanTile.classList.contains("hidden")) {
     score++;
    console.log(score);
  }
    pakistanTile.classList.remove("hidden");
  }
  
  else if (guess === "brazil") {
    console.log("User typed in brazil")
  if (brazilTile.classList.contains("hidden")) {
     score++;
    console.log(score);
  }
    brazilTile.classList.remove("hidden");
  }
  
  else if (guess === "nigeria") {
    console.log("User typed in nigeria")
  if (nigeriaTile.classList.contains("hidden")) {
     score++;
    console.log(score);
  }
    nigeriaTile.classList.remove("hidden");
  }
  
  else if (guess === "bangladesh") {
    console.log("User typed in bangladesh")
  if (bangladeshTile.classList.contains("hidden")) {
     score++;
    console.log(score);
  }
    bangladeshTile.classList.remove("hidden");
  }
  
  else if (guess === "russia") {
    console.log("User typed in russia")
  if (russiaTile.classList.contains("hidden")) {
     score++;
    console.log(score);
  }
    russiaTile.classList.remove("hidden");
  }
  
  else if (guess === "mexico") {
    console.log("User typed in mexico")
  if (mexicoTile.classList.contains("hidden")) {
     score++;
    console.log(score);
  }
    mexicoTile.classList.remove("hidden");
  }
  
  //else if (guess !== "china" || guess !== "india" || guess !== "america" || guess !== "united states" || guess !== "united states of america" || guess !== "usa" || guess !== "us" || guess !== "indonesia" || guess !== "brazil" || guess !== "nigeria" || guess !== "bangladesh" || guess !== "russia" || guess !== "mexico");
  //console.log("incorrect answer!");
  
  inputField.value = "";
  
const status1 = document.querySelector("#titleText");
console.log(status1);
const status2 = document.querySelector("#subtext");
console.log(status2);
  
  if (score === 10) {
  console.log("You Won!");
  inputField.placeholder = "YAY!";
  status1.innerHTML = "You Won!";
  status2.innerHTML = "So smart! Congratulations! :)";

}
});