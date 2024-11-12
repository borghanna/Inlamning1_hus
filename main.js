window.addEventListener("DOMContentLoaded", main);

function main() {
  loadingWelcomeScene();
}
function loadingWelcomeScene() {
  topButton.onclick = loadingFirstScene;
  // leftButton.className = "btn hidden";
  leftButton.classList.add("hidden"); //remove när de ska visas
  rightButton.classList.add("hidden"); //remove när de ska visas
  bottomButton.classList.add("hidden");
}

function loadingFirstScene() {
  heading.innerHTML = "Hall 1";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "Hej test hej";
  leftButton.classList.remove("hidden");
  rightButton.classList.remove("hidden");
  bottomButton.classList.remove("hidden");
}
