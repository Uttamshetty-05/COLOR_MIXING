let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

let finalColorBox = document.getElementById("finalColor");
let rgbValue = document.getElementById("rgbValue");
let hexValue = document.getElementById("hexValue");


function hexToRgb(hex) {
    hex = hex.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
}


function rgbToHex(r, g, b) {
    return "#" +
        r.toString(16).padStart(2, '0') +
        g.toString(16).padStart(2, '0') +
        b.toString(16).padStart(2, '0');
}

function mixColors() {
    let col1 = hexToRgb(c1.value);
    let col2 = hexToRgb(c2.value);
    let col3 = hexToRgb(c3.value);


    let r = Math.round((col1.r + col2.r + col3.r) / 3);
    let g = Math.round((col1.g + col2.g + col3.g) / 3);
    let b = Math.round((col1.b + col2.b + col3.b) / 3);

    let hex = rgbToHex(r, g, b).toUpperCase();

    finalColorBox.style.background = `rgb(${r}, ${g}, ${b})`;

    rgbValue.innerHTML = `RGB: (${r}, ${g}, ${b})`;
    hexValue.innerHTML = `HEX: ${hex}`;
}


c1.addEventListener("input", mixColors);
c2.addEventListener("input", mixColors);
c3.addEventListener("input", mixColors);


mixColors();
