const colorChangeButton = document.getElementById("colorChangeButton");
const changeColorText = document.getElementById("changeColorText");

function changeTextColor() {
    
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    changeColorText.style.color = randomColor;
}

colorChangeButton.addEventListener("click", changeTextColor);
