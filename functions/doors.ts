import DoorModel from '../model/door';

export function createDoors(quantity: number, doorWithPrize: number): DoorModel[] {
    return Array.from({ length: quantity }, (_, i) => {
        const number = i + 1;
        const hasPresent = number === doorWithPrize;
        return new DoorModel(number, hasPresent);
    });
}

export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const equalToModified = currentDoor.number === modifiedDoor.number

        if(equalToModified) {
            return modifiedDoor
        } else {
            return modifiedDoor.open ? currentDoor : currentDoor.unselect();
        }
    })
}