const tail = document.querySelector(`.xvost`);
const body = document.querySelector("body");

const tailWidth = 250;
const tailHeight = 250;

window.addEventListener("mousemove", (e) => {
  const directionX = e.clientX;
  const directionY = e.clientY;

  tail.style = `width: ${tailWidth + "px"};
  height: ${tailHeight + "px"}`;

  tail.style.transform = `translate3d(${directionX - tailWidth / 2}px, 
  ${directionY - tailHeight / 2}px,
     0)`;
});
