let r = document.querySelector(':root');
let start;
function step(timestamp) {
    if(start === undefined) {
        start = timestamp;
    }

    const angle = (timestamp - start) / 30;
    r.style.setProperty('--gradient-angle', angle + 'deg');
    window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

var snowConfig = {
  color: [161 / 256, 197 / 256, 231 / 256],
  count: 100,
  opacity: 0.8,
  density: 1 / 50,
};
