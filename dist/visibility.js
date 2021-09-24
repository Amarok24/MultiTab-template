export { elementHide, elementShow, elementToggle, nodeListShow, nodeListHide, cssClassAdd, cssClassRemove, cssClassToggle };
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
function nodeListShow(list) {
    if (list.length === 0)
        return;
    for (let i = 0; i < list.length; i++) {
        elementShow(list[i]);
    }
}
function nodeListHide(list) {
    if (list.length === 0)
        return;
    for (let i = 0; i < list.length; i++) {
        elementHide(list[i]);
    }
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
