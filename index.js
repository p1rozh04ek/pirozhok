// let r = document.querySelector(':root');
// let start;
// function step(timestamp) {
//     if(start === undefined) {
//         start = timestamp;
//     }

//     const angle = (timestamp - start) / 30;
//     r.style.setProperty('--gradient-angle', angle + 'deg');
//     window.requestAnimationFrame(step);
// }
// window.requestAnimationFrame(step);

var element_year = document.getElementById("year");
var element_date = document.getElementById("date");
if(element_year) element_year.innerHTML = new Date().getFullYear();
if(element_date) element_date.innerHTML = new Date().toLocaleDateString(navigator.language);

function openTechnikum()
{
    document.location.href = "http://zsdios.pl/";
}

var snowConfig = {
  color: [255, 255, 255],
  count: 100,
  opacity: 0.8,
  density: 1 / 100,
};