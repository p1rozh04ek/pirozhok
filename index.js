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