document.addEventListener("DOMContentLoaded", function () {
const colorSection = document.getElementById("colorSection");

function createColorBox(color, name) {
    const colorBox = document.createElement("div");
    colorBox.className = "color_box";
    colorBox.style.backgroundColor = color;
    colorBox.addEventListener("click", function () {
    openColorModal(color, name);
});
    const colorName = document.createElement("div");
    colorName.className = "color_name";
    colorName.textContent = name;
    colorBox.appendChild(colorName);
    colorSection.appendChild(colorBox);
}
    
function openColorModal(color, name) {
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContent.style.backgroundColor = color;
    const message = document.createElement("p");
    message.textContent = `Copied: ${name}`;
    modalContent.appendChild(message);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    setTimeout(function () {
        document.body.removeChild(modalOverlay);
    }, 2000);
    var audio = new Audio('src_notify.mp3');
    audio.play();
}

createColorBox("#ffb142", "MandarinSorbet");
createColorBox("#4834d4", "Blurple");
createColorBox("#fab1a0", "FirstDate");
createColorBox("#55efc4", "LightGreenishBlue");
createColorBox("#5758BB", "CircumorbitalRing");
createColorBox("#9980FA", "ForgottenPurple");
createColorBox("#F79F1F", "RadiantYellow");
createColorBox("#FFC312", "Sunflower");
createColorBox("#16a085", "GreenSea");
});