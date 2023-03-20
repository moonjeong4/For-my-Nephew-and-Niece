export default {
  init: function (selector) {
    const ttEls = document.querySelectorAll(selector);

    let ttel;

    for (let i = 0; i < ttEls.length; i++) {
      ttel = document.createElement("div");
      // ttel.id = "tool-tip";
      ttel.classList.add("tool-tip");

      ttEls[i].addEventListener("mouseover", function () {
        ttel.textContent = ttEls[i].dataset.fact;
        ttel.style.opacity = 1;
        document.body.append(ttel);
        document.addEventListener("mousemove", function (event) {
          ttel.style.left = event.pageX + 5 + "px";
          ttel.style.top = event.pageY + 5 + "px";
        });
      });
      // ttEls[i].addEventListener("mouseout", function () {
      //   ttel.style.opacity = 0;
      // });
    }
  },
};
