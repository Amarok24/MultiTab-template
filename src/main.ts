/*
MultiTab Template
Version 0.1
Copyright 2021 Jan Prazak, https://github.com/Amarok24

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Globals } from "./globals.js";
import * as v from "./visibility.js";

const g = new Globals();


function hideAllCards(contentElems: NodeListOf<HTMLElement>): void {
  if (contentElems.length === 0) return;

  for (let i = 0; i < contentElems.length; i++) {
    v.elementHide(contentElems[i]);
  }
}


function coupleNavAndCards(
  navElems: NodeListOf<HTMLElement>, contentElems: NodeListOf<HTMLElement>) {

  const cssActiveName = 'selected';

  function onNavButtonClick(index: number, ev: Event): void {
    ev.preventDefault();

    hideAllCards(g.allCards);
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


// ===== INIT =====

coupleNavAndCards(g.allNavButtons, g.allCards);
hideAllCards(g.allCards);
v.elementShow(g.allCards[0]);
