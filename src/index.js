import "./styles.css";

import templateApp from "./hbs/app.hbs";
import templateMoment from "./hbs/moment.hbs";
import templateSophia from "./hbs/sophia.hbs";
import templateRuben from "./hbs/ruben.hbs";
import templateFood from "./hbs/food.hbs";
import moveBalls from "./js/catMove";
import catFacts from "./js/catFacts";
import flickrCats from "./js/flickrCats";
import flickrDogs from "./js/flickrDogs";
import toolTip from "./js/toolTip";
import sophiaInfo from "./js/sophiaInfo";

const appEl = document.getElementById("app");

appEl.innerHTML = templateApp();

const b1El = document.getElementById("ball1");
const b2El = document.getElementById("ball2");
const b3El = document.getElementById("ball3");
const b4El = document.getElementById("ball4");
const b5El = document.getElementById("ball5");

moveBalls.startAnim("ball1", catFacts, 1);
moveBalls.startAnim("ball2", catFacts, 10);
moveBalls.startAnim("ball3", catFacts, 20);
moveBalls.startAnim("ball4", catFacts, 30);
moveBalls.startAnim("ball5", catFacts, 40);

const mainEl = document.getElementById("main");
const homeEl = document.getElementById("home");
const momentEl = document.getElementById("moment");
const foodEl = document.getElementById("food");
const gameEl = document.getElementById("game");
// const allElements = document.querySelectorAll("*");

// const langBtnEl = document.getElementById("language");
// let currentLanguage = "en";

// langBtnEl.addEventListener("click", function () {
//   if (currentLanguage === "en") {
//     homeEl.textContent = "Accueil 💕";
//     momentEl.textContent = "Les Meilleurs moments 🚙";
//     foodEl.textContent = "Les favoris de Sophie 🍱";
//     gameEl.textContent = "Les centres d'intérêt de Rubén 🎮";
//     langBtnEl.textContent = "English";
//     currentLanguage = "fr";
//   } else {
//     homeEl.textContent = "Home 💕";
//     momentEl.textContent = "Best Moments 🚙";
//     foodEl.textContent = "Sophia's Favourites 🍱";
//     gameEl.textContent = "Ruben's Interests 🎮";
//     langBtnEl.textContent = "Français";
//     currentLanguage = "en";
//   }
// });

homeEl.addEventListener("click", function () {
  mainEl.innerHTML = templateApp();
});

momentEl.addEventListener("click", function () {
  mainEl.innerHTML = templateMoment();
  const images = document.querySelectorAll(".gallery img");
  const slideshow = document.createElement("div");
  const slideshowImage = document.createElement("img");
  const prevButton = document.createElement("div");
  const nextButton = document.createElement("div");
  let index = 0;

  function openSlideshow() {
    document.body.appendChild(slideshow);
    slideshow.appendChild(slideshowImage);
    slideshow.appendChild(prevButton);
    slideshow.appendChild(nextButton);
    slideshow.classList.add("slideshow");
    slideshowImage.src = images[index].src;
    prevButton.innerHTML = "<";
    nextButton.innerHTML = ">";
    prevButton.classList.add("prev");
    nextButton.classList.add("next");
    prevButton.addEventListener("click", showPrev);
    nextButton.addEventListener("click", showNext);
    document.addEventListener("keydown", handleKeydown);
  }

  function closeSlideshow() {
    document.body.removeChild(slideshow);
    document.removeEventListener("keydown", handleKeydown);
  }

  function showPrev() {
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
    slideshowImage.src = images[index].src;
  }

  function showNext() {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    slideshowImage.src = images[index].src;
  }

  function handleKeydown(event) {
    if (event.key === "ArrowLeft") {
      showPrev();
    } else if (event.key === "ArrowRight") {
      showNext();
    } else if (event.key === "Escape") {
      closeSlideshow();
    }
  }

  images.forEach((image) => {
    image.addEventListener("click", openSlideshow);
  });

  slideshowImage.addEventListener("click", closeSlideshow);
});

foodEl.addEventListener("click", function () {
  mainEl.innerHTML = templateSophia(sophiaInfo);
  const elsNavLink = document.getElementsByClassName("nav-link");

  for (let elNavLink of elsNavLink) {
    elNavLink.addEventListener("click", function () {
      for (let food of sophiaInfo.food) {
        if (food.name === this.dataset.link) {
          document.getElementById("asian-food").innerHTML = templateFood(food);
          return;
        }
      }
    });
  }
});
gameEl.addEventListener("click", function () {
  mainEl.innerHTML = templateRuben();
  const backEl = document.getElementById("back");

  const forBallEl = document.getElementById("for-ball");
  const forBallsEl = document.getElementById("for-balls");

  document.getElementById("cat-facts").addEventListener("click", function () {
    b1El.classList.add("cat");
    b2El.classList.add("cat");
    b3El.classList.add("cat");
    b4El.classList.add("cat");
    b5El.classList.add("cat");
    toolTip.init(".cat");

    forBallEl.classList.add("for-cat-show");
    forBallsEl.classList.add("for-cat-show");

    // allElements.forEach((element) => {
    //   element.classList.add("for-the-show");
    // });
    document.querySelector("body").classList.add("for-the-show");
  });

  backEl.addEventListener("click", function () {
    b1El.classList.remove("cat");
    b2El.classList.remove("cat");
    b3El.classList.remove("cat");
    b4El.classList.remove("cat");
    b5El.classList.remove("cat");

    forBallEl.classList.remove("for-cat-show");
    forBallsEl.classList.remove("for-cat-show");
    // allElements.forEach((element) => {
    //   element.classList.remove("for-the-show");
    // });
    document.querySelector("body").classList.remove("for-the-show");

    //   document.getElementById("tool-tip").style.opacity = 0;
    const toolEls = document.getElementsByClassName("tool-tip");
    for (const toolEl of toolEls) {
      toolEl.style.opacity = 0;
    }
  });

  document.getElementById("search").addEventListener("click", function () {
    flickrCats.search();
  });
  flickrCats.init("photos");

  document.getElementById("search-dog").addEventListener("click", function () {
    flickrDogs.search();
  });
  flickrDogs.init("photos-dog");
});

// document.querySelector("body").style.background = "yellow";
