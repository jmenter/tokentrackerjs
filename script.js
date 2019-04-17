function incrementVictory() {
    adjust("victory", 1);
}
function decrementVictory() {
    adjust("victory", -1);
}
function incrementVillagers() {
    adjust("villagers", 1);
}
function decrementVillagers() {
    adjust("villagers", -1);
}
function incrementCoffers() {
    adjust("coffers", 1);
}
function decrementCoffers() {
    adjust("coffers", -1);
}
function incrementDebt() {
    adjust("debt", 1);
}
function decrementDebt() {
    adjust("debt", -1);
}

function adjust(item, value) {
    let element = document.getElementById(item);
    let currentValue = parseInt(element.textContent);
    currentValue += value;
    if (currentValue < 0) {
        currentValue = 0;
    }
    element.textContent = currentValue;
}