function resizeMap()
{
    let width = document.getElementById("map").width;
    let height = document.getElementById("map").height;
    document.getElementById("map-zwierzynczyk").coords = (width * 0.18) + "," + (height * 0.2) + "," + (width * 0.8) + "," + (height * 0.45);
    document.getElementById("map-technikum").coords = (width * 0.18) + "," + (height * 0.45) + "," + width + "," + (height * 0.6);
    document.getElementById("map-kosciol").coords = (width * 0.28) + "," + (height * 0.6) + "," + (width * 0.8) + "," + (height * 0.85);
}

addEventListener("resize", (event) => {
    resizeMap();
});

resizeMap();
