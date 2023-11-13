function upArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 10 + 'px';
}
function downArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 10 + 'px';
}
function leftArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 10 + 'px';
}
function rightArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 10 + 'px';

}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 65:
            leftArrowPressed();
            break;
        case 68:
            rightArrowPressed();
            break;
        case 87:
            upArrowPressed();
            break;
        case 83:
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}