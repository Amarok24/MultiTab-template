import { Globals } from "./globals.js";
import * as v from "./visibility.js";
const queryToNavElements = '#cardButtons a';
const queryToCardElements = '.cardContent';
const g = new Globals(queryToNavElements, queryToCardElements);
function coupleNavAndCards(navElems, contentElems) {
    const cssActiveName = 'selected';
    function onNavButtonClick(index, ev) {
        ev.preventDefault();
        v.nodeListHide(g.allCards);
        v.elementShow(g.allCards[index]);
        for (let i = 0; i < navElems.length; i++) {
            v.cssClassRemove(g.allNavButtons[i], cssActiveName);
        }
        v.cssClassAdd(g.allNavButtons[index], cssActiveName);
    }
    for (let i = 0; i < g.allNavButtons.length; i++) {
        g.allNavButtons[i].addEventListener('click', onNavButtonClick.bind(null, i));
    }
}
coupleNavAndCards(g.allNavButtons, g.allCards);
v.nodeListHide(g.allCards);
v.elementShow(g.allCards[0]);
