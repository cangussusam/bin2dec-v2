const sty = document.querySelector('.trans');
const arrow = document.querySelector('.icon');
const errorMensage = document.querySelector('#error');
function error() {
    errorMensage.innerHTML = "Error: Insert a validy input.";
    if (sty) {
        sty.setAttribute("style", "margin:15% 0 2.5% 0");
    }
    if (arrow) {
        arrow.setAttribute("style", "width: 7%");
    }
}
function pattern() {
    errorMensage.innerHTML = '';
    if (sty) {
        sty.setAttribute("style", "margin:15%");
    }
    if (arrow) {
        arrow.setAttribute("style", "width: 10%");
    }
}
export { error, pattern };
