function select(elem) {
  return document.querySelector(elem);
}

const hoverText = select(".hover-text");
const mask = select(".mask");

let isHover = false;
const sizes = {
  init: 50,
  final: 400,
};

document.addEventListener("mousemove", (e) => {
  const size = isHover ? sizes.final : sizes.init;
  gsap.to(mask, {
    maskSize: `${size}px`,
    duration: 0.5,
    onUpdate: () => {
      mask.style.maskPosition = `${e.clientX - size / 2}px ${
        e.clientY - size / 2
      }px`;
    },
  });
});

hoverText.addEventListener("mouseenter", () => (isHover = true));
hoverText.addEventListener("mouseleave", () => (isHover = false));
