export default {
  startAnim: async function (id, callback, speed) {
    let elBall = document.getElementById(id);

    elBall.dataset.fact = await callback();
    let leftBallPos = Math.trunc(Math.random() * (window.innerWidth - 160));
    let topBallPos = Math.trunc(Math.random() * (window.innerHeight - 160));
    let hdir = 1;
    let vdir = 1;

    let animInterval = setInterval(() => {
      if (leftBallPos > window.innerWidth - 160 || leftBallPos < 0) {
        hdir *= -1;
      }
      if (topBallPos > window.innerHeight - 160 || topBallPos < 0) {
        vdir *= -1;
      }
      leftBallPos += hdir;
      topBallPos += vdir;
      elBall.style.left = leftBallPos + "px";
      elBall.style.top = topBallPos + "px";
    }, speed);
  },
};
