function handleMouseDown(element) {
    console.log("down")
    element.style.opacity = 1;
}

function handleMouseUp(element) {
    console.log("up")
    element.style.opacity = 0.5;
}

function handleOnClick(identifier, amount) {
    let element = document.getElementById(identifier);
    let currentValue = parseInt(element.textContent);
    currentValue += amount;
    if (currentValue < 0) {
        currentValue = 0;
    }
    element.textContent = currentValue;
}