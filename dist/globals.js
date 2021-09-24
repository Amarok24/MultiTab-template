export { Globals };
class Globals {
    constructor(queryNavButtons, queryCards) {
        this.allNavButtons = document.querySelectorAll(queryNavButtons);
        this.allCards = document.querySelectorAll(queryCards);
    }
}
