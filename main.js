window.addEventListener("DOMContentLoaded", main);

function main() {
  loadingWelcomeScene();
}
function loadingWelcomeScene() {
  heading.innerHTML = "HUSET";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
    euismod, nibh maximus bibendum tempor, felis tellus pretium lectus,
    nec porta nisi enim vel lectus. Vivamus nec leo et neque tempor
    porttitor. Maecenas et mollis eros. Aenean mollis mi ante, non dictum
    leo varius eget. Pellentesque id tortor consectetur, volutpat libero
    in, pretium risus. Integer vitae viverra libero. Nunc dignissim
    consequat pellentesque. Ut sit amet lacus sit amet nisi dapibus rutrum
    tempus id mauris. Nam ornare diam ex, id consequat nunc pulvinar a.
    Fusce tempus, mauris vitae rutrum dapibus, ex urna laoreet mauris,
    molestie tincidunt ex nulla et massa.`;
  topButton.onclick = loadingFirstScene;
  // leftButton.className = "btn hidden";
  topButton.classList.remove("hidden");
  leftButton.classList.add("hidden"); //remove när de ska visas
  rightButton.classList.add("hidden"); //remove när de ska visas
  bottomButton.classList.add("hidden");
}

//entré
function loadingFirstScene() {
  heading.innerHTML = "Hall 1";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML =
    "en lång korridor sträcker sig rakt fram och till höger";
  topButton.onclick = loadingSecondScene; //hall rakt fram
  rightButton.onclick = loadingScene6; //hall till höger
  bottomButton.onclick = loadingWelcomeScene; //tillbaks till start
  bottomButton.classList.remove("hidden");
  rightButton.classList.remove("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.add("hidden");
}

//hall rakt fram
function loadingSecondScene() {
  heading.innerHTML = "Korridor fram";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML =
    "rakt fram finns en liten dörr och till vänster en ingång till ett stort rum ";
  leftButton.onclick = loadingScene3; //vardagsrum
  topButton.onclick = loadingScene8; //garderob
  bottomButton.onclick = loadingFirstScene;
  topButton.classList.remove("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.remove("hidden");
  rightButton.classList.add("hidden");
}

//TODO istället för vänsterknapp, lägg till två val (en till badrum en till skrubb)
function loadingScene3() {
  heading.innerHTML = "Vardagsrum";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML =
    "här finns två dörrar till vänster, vilken väljer du?";
  var buttonBlueDoor = document.createElement("BUTTON");
  bottomButton.onclick = loadingSecondScene; //tillbaks till korridor
  //leftButton.onclick = loadingScene4; // gör om till knappval, badrum TODO
  //topButton.onclick = loadingScene5; //gör om till knappval, källarskrubb TODO
  topButton.classList.remove("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.add("hidden");
  rightButton.classList.add("hidden");
}

function loadingScene4() {
  heading.innerHTML = "Badrum";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "badrum text";
  rightButton.onclick = loadingScene5; //Denna ska vara låst
  bottomButton.onclick = loadingScene3;
  topButton.classList.add("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.add("hidden");
  rightButton.classList.remove("hidden");
}

function loadingScene5() {
  heading.innerHTML = "Skrubb";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "lucka till källare";
  bottomButton.onclick = loadingScene3; //vardagsrum
  topButton.onclick = loadingScene9; //källare
  rightButton.classList.add("hidden");
}

function loadingScene6() {
  heading.innerHTML = "Korridor höger";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML =
    "Här tar korridoren slut. en dörr till vänster står halvöppen";
  leftButton.onclick = loadingScene7; //kök
  bottomButton.onclick = loadingFirstScene; //tillbaks till entré
  topButton.classList.add("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.remove("hidden");
  rightButton.classList.add("hidden");
}
function loadingScene7() {
  heading.innerHTML = "Kök";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "trappa? en till källardörr?";
  bottomButton.onclick = loadingScene6;
  topButton.classList.add("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.add("hidden");
  rightButton.classList.add("hidden");
}

function loadingScene8() {
  heading.innerHTML = "garderob";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "här finns nyckeln";
  bottomButton.onclick = loadingSecondScene;
  topButton.classList.add("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.add("hidden");
  rightButton.classList.add("hidden");
}

function loadingScene9() {
  heading.innerHTML = "Källare";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "text för källare";
  leftButton.onclick = loadingScene10;
  bottomButton.onclick = loadingScene8;
  topButton.classList.remove("hidden");
  bottomButton.classList.add("hidden");
  leftButton.classList.remove("hidden");
  rightButton.classList.add("hidden");
}

function loadingScene10() {
  heading.innerHTML = "Väg tillbaks till start";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "text";
  topButton.onclick = loadingWelcomeScene;
  topButton.classList.remove("hidden");
  bottomButton.classList.add("hidden");
  leftButton.classList.add("hidden");
  rightButton.classList.add("hidden");
}
