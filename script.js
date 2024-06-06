const btn = document.getElementById("joke-btn");
const firstParagraph = document.querySelector(".joke-id");
const secondParagraph = document.querySelector(".joke-text");

function renderJoke(slip, ceva) {
  firstParagraph.innerHTML = slip;
  secondParagraph.innerHTML = ceva;
}

async function getDataFromApi() {
  const url =
    // "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Christmas?blacklistFlags=religious,racist,sexist";
    "https://api.adviceslip.com/advice";

  let slip;
  let advice = "";
  try {
    const response = await fetch(url); // asteptam dupa raspunsul api ului
    const data = await response.json(); //  asteptam sa fie transformat in fisier de tip json
    slip = `Advice #${data.slip.id}`;
    advice = `"${data.slip.advice}"`;
  } catch (err) {
    console.log("eroare API " + err);
  }
  renderJoke(slip, advice);
}

btn.addEventListener("click", getDataFromApi);
