function toggleAnswer(id) {
  var answer = document.getElementById(id);
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "flex";
  } else {
    answer.style.display = "none";
  }
}
const navBar = document.getElementById("navBar");

function toggleMenu() {
  navBar.classList.toggle("responsive");
}
