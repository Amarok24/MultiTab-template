/*
MultiTab Template
Version 0.2
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

export {
  elementHide,
  elementShow,
  elementToggle,
  nodeListShow,
  nodeListHide,
  cssClassAdd,
  cssClassRemove,
  cssClassToggle
};


const cssDisplayNone = 'd-none';

function elementShow(elem: HTMLElement | null): void {
  elem?.classList.remove(cssDisplayNone);
}

function elementHide(elem: HTMLElement | null): void {
  elem?.classList.add(cssDisplayNone);
}

function elementToggle(elem: HTMLElement | null): void {
  elem?.classList.toggle(cssDisplayNone);
}

function nodeListShow<T extends HTMLElement = HTMLElement>(list: NodeListOf<T>): void {
  if (list.length === 0) return;

  for (let i = 0; i < list.length; i++) {
    elementShow(list[i]);
  }
}

function nodeListHide<T extends HTMLElement = HTMLElement>(list: NodeListOf<T>): void {
  if (list.length === 0) return;

  for (let i = 0; i < list.length; i++) {
    elementHide(list[i]);
  }
}

function cssClassAdd(elem: HTMLElement | null, className: string): void {
  elem?.classList.add(className);
}

function cssClassRemove(elem: HTMLElement | null, className: string): void {
  elem?.classList.remove(className);
}

function cssClassToggle(elem: HTMLElement | null, className: string): void {
  elem?.classList.toggle(className);
}
