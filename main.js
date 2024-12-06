window.addEventListener("DOMContentLoaded", main);

let inventory = [""];

function main() {
  loadingWelcomeScene();
}

function loadingWelcomeScene() {
  heading.innerHTML = "HUSET";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = `Det är skymning nu, kanske en timme sedan solen gick ner.  Det var också ett bra tag sedan du passerade de senaste bostadshusen.  Nu omgärdas du av skogen, den ensliga lansvägen och det mer och mer påträngande mörkret. Du börjar närma dig ditt mål.

  Rakt fram börjar du skymta siluetten  av ett stort, gammalt hus. Det är till stor del dolt av övervuxna träd som omsluter trädgården, men en bekant känsla i maggropen påkallar ett minne, kanske från en dröm. I någon form har du varit på denna platsen förut. 
  
  Du går med bestämda steg fram till den rostiga grinden, den knarrar när du öppnar den. Framför dig  uppenbaras en ödsligt sekelskiftesvilla med flagnande färg på fasaden. Huset rymde en gång liv och rörelse, men nu övergivet sedan länge och förfallet av tidens gång är påtagligt.
  
  Något finns i huset som du behöver och din misstanke säger att ytterdörren är olåst.`;
  topButton.onclick = loadingFirstScene;
  // leftButton.className = "btn hidden";
  topButton.classList.remove("hidden");
  leftButton.classList.add("hidden"); //remove när de ska visas
  rightButton.classList.add("hidden"); //remove när de ska visas
  bottomButton.classList.add("hidden");
  keyButton.classList.add("hidden");
}

//entré
function loadingFirstScene() {
  heading.innerHTML = "Entré";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = `Precis som du misstänkte var ytterdörren olåst.  Med lite ansträngning får du upp den tunga dörren som troligtvis inte använts på åratal, trotts att det bara är att gå rätt in.

  Du möts av lukten av damm och mögel och fipplar med lampan på mobilen för att kunna tränga igenom mörkret. När du lyser upp rummet uppenbaras en korridor som sträcker sig framåt och en annan till höger. `;
  topButton.onclick = loadingSecondScene; //hall rakt fram
  rightButton.onclick = loadingScene6; //hall till höger
  bottomButton.onclick = loadingWelcomeScene; //tillbaks till start
  bottomButton.classList.remove("hidden");
  rightButton.classList.remove("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.add("hidden");
  keyButton.classList.add("hidden");
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
  keyButton.classList.add("hidden");
}

function loadingScene3() {
  heading.innerHTML = "Vardagsrum";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML =
    "Här finns två dörrar till vänster, vilken väljer du?";

  // Kontrollera om knappcontainern finns och ta bort endast om den finns
  removeDoorButtons();

  // Skapa container för dörrknappar om den inte redan finns
  let doorButtonContainer = document.getElementById("doorButtonContainer");
  if (!doorButtonContainer) {
    doorButtonContainer = document.createElement("div");
    doorButtonContainer.id = "doorButtonContainer";
    const leftGridItem = document.querySelector(".griditem:nth-child(4)");
    leftGridItem.appendChild(doorButtonContainer);
  }

  // Skapa blå dörrknapp
  const blueDoorButton = document.createElement("button");
  blueDoorButton.innerText = "Blå dörr";
  blueDoorButton.id = "blueDoorButton";
  blueDoorButton.classList.add("blue-door");

  // Kontroll för nyckel
  blueDoorButton.onclick = function () {
    if (inventory.includes("key")) {
      removeDoorButtons();
      loadingScene5();
    } else {
      alert("Dörren är låst. Du behöver en nyckel.");
    }
  };

  // Skapa vit dörrknapp
  const whiteDoorButton = document.createElement("button");
  whiteDoorButton.innerText = "Vit dörr";
  whiteDoorButton.id = "whiteDoorButton";
  whiteDoorButton.classList.add("white-door");
  whiteDoorButton.onclick = () => {
    removeDoorButtons();
    loadingScene4();
  };
  doorButtonContainer.appendChild(whiteDoorButton);

  // Justera knappsynlighet
  topButton.classList.add("hidden");
  leftButton.classList.add("hidden");
  rightButton.classList.add("hidden");

  // Back-knapp
  bottomButton.onclick = function () {
    removeDoorButtons();
    loadingSecondScene();
  };
  bottomButton.classList.remove("hidden");
}

// Ta bort knappcontainern
function removeDoorButtons() {
  const doorButtonContainer = document.getElementById("doorButtonContainer");
  if (doorButtonContainer) doorButtonContainer.remove();
}

function loadingScene4() {
  heading.innerHTML = "Badrum";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML =
    "Det verkar finnas en dörr till höger, men den är låst.";

  // Lås upp scen 5 om nyckeln finns
  rightButton.onclick = function () {
    if (inventory.includes("key")) {
      loadingScene5();
    } else {
      alert("Dörren är låst. Du behöver en nyckel för att öppna den.");
    }
  };

  bottomButton.onclick = loadingScene3;
  topButton.classList.add("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.add("hidden");
  rightButton.classList.remove("hidden");
  keyButton.classList.add("hidden");
}

function loadingScene5() {
  heading.innerHTML = "Skrubb";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "lucka till källare";
  bottomButton.onclick = loadingScene3; //vardagsrum
  topButton.onclick = loadingScene9; //källare
  topButton.classList.remove("hidden");
  rightButton.classList.add("hidden");
  leftButton.classList.add("hidden");
  bottomButton.classList.remove("hidden");
  keyButton.classList.add("hidden");
}

function loadingScene6() {
  heading.innerHTML = "Korridor";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = `Golvplankorna knarrar när du tar dig i riktning mot korridorens ände. 
  Är detta rätt väg? Du försöker minnas. 
  när di tagit dig hela vägen finner du en stängd dörr på vänstersidan.`;
  leftButton.onclick = loadingScene7; //kök
  bottomButton.onclick = loadingFirstScene; //tillbaks till entré
  topButton.classList.add("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.remove("hidden");
  rightButton.classList.add("hidden");
  keyButton.classList.add("hidden");
}

function loadingScene7() {
  heading.innerHTML = "Kök";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "trappa?";
  bottomButton.onclick = loadingScene6;
  topButton.classList.add("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.add("hidden");
  rightButton.classList.add("hidden");
  keyButton.classList.add("hidden");
}

function loadingScene8() {
  heading.innerHTML = "Garderob";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "här finns nyckeln";

  removeKeyButton();

  let keyButton = document.createElement("button");
  keyButton.id = "keyButton";
  keyButton.innerText = "Ta upp nyckel";
  keyButton.classList.add("blue-door");

  const pageContent = document.getElementById("pageContent");
  pageContent.appendChild(keyButton);

  // När knappen klickas, lägg till nyckeln till inventory och ta bort knappen
  keyButton.onclick = function () {
    inventory.push("key");
    alert("Du har hittat en nyckel!");
    keyButton.remove();
  };

  bottomButton.onclick = function () {
    loadingSecondScene();
    removeKeyButton();
  };

  topButton.classList.add("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.add("hidden");
  rightButton.classList.add("hidden");

  function removeKeyButton() {
    const keyButton = document.getElementById("keyButton");
    if (keyButton) keyButton.remove();
  }
}

function loadingScene9() {
  heading.innerHTML = "Källare";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "text för källare";
  leftButton.onclick = loadingScene10;
  bottomButton.onclick = function () {
    alert("Åh nej, luckan är låst. Du kommer inte tillbaka.");
  };
  topButton.classList.remove("hidden");
  bottomButton.classList.remove("hidden");
  leftButton.classList.remove("hidden");
  rightButton.classList.remove("hidden");
}

function loadingScene9() {
  heading.innerHTML = "Källare";
  const firstSceneP = document.getElementById("mainText");
  firstSceneP.innerHTML = "text för källare";

  // När högerknappen klickas ska nyckeln läggas till i inventory
  rightButton.onclick = function () {
    inventory.push("key2"); // Lägg till nyckel 2 i inventory
    alert("Du hittar en ny nyckel som kan öppna nästa dörr.");
  };
  bottomButton.onclick = function () {
    alert("Åh nej, luckan är låst. Du kommer inte tillbaka.");
  };
  // När topknappen klickas ska den kolla om nyckeln finns i inventory
  topButton.onclick = function () {
    if (inventory.includes("key2")) {
      loadingScene10(); // Ladda scen 10 om nyckeln finns
    } else {
      alert("Dörren är låst, du behöver en nyckel för att öppna den.");
    }

    bottomButton.onclick = () => {
      alert("Åh nej, luckan är låst. Du kommer inte tillbaka.");
    };
  };

  bottomButton.classList.remove("hidden");
  topButton.classList.remove("hidden");
  leftButton.classList.remove("hidden");
  rightButton.classList.remove("hidden");
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
  keyButton.classList.add("hidden");
}
