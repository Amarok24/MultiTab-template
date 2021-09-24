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

export { Globals };


class Globals {

  public allNavButtons: NodeListOf<HTMLElement>;
  public allCards: NodeListOf<HTMLElement>;

  constructor(queryNavButtons: string, queryCards: string) {
    this.allNavButtons = document.querySelectorAll<HTMLElement>(queryNavButtons);
    this.allCards = document.querySelectorAll<HTMLElement>(queryCards);
  }
}
