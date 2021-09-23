export { elementHide, elementShow, elementToggle, cssClassAdd, cssClassRemove, cssClassToggle };
const cssDisplayNone = 'd-none';
function elementShow(elem) {
    elem?.classList.remove(cssDisplayNone);
}
function elementHide(elem) {
    elem?.classList.add(cssDisplayNone);
}
function elementToggle(elem) {
    elem?.classList.toggle(cssDisplayNone);
}
function cssClassAdd(elem, className) {
    elem?.classList.add(className);
}
function cssClassRemove(elem, className) {
    elem?.classList.remove(className);
}
function cssClassToggle(elem, className) {
    elem?.classList.toggle(className);
}
