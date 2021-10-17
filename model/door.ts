export default class DoorModel {

    #number: number;
    #hasPrize: boolean;
    #selected: boolean;
    #open:boolean;

    constructor(number: number, hasPrize = false, selected = false, open = false) {
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
        return new DoorModel(this.number, this.hasPrize, selected, this.open);
    }

    toggleSelected() {
        const selected = !this.selected;
        return new DoorModel(this.number, this.hasPrize, selected, this.open);
    }

    openDoor() {
        const open = true;
        return new DoorModel(this.number, this.hasPrize, this.selected, open);
    }
}