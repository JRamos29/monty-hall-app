export default class Door {

    #
    number;#
    hasPrize;#
    selected;#
    open;

    constructor(number, hasPrize = false, selected = false, open = false) {
        this.#number = number;
        this.#hasPrize = hasPrize;
        this.#selected = selected;
        this.#open = open;
    }


    get number() {
        return this.#number;
    }
    get hasPrize() {
        return this.#hasPrize;
    }
    get selected() {
        return this.#selected;
    }
    get open() {
        return this.#open;
    }

    unselect() {
        const selected = false;
        return new Door(this.number, this.hasPrize, selected, this.open);
    }

    toggleSelected() {
        const selected = !this.selected;
        return new Door(this.number, this.hasPrize, selected, this.open);
    }

    openDoor() {
        const open = true;
        return new Door(this.number, this.hasPrize, this.selected, open);
    }

}