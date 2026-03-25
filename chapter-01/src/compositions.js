class Room {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class House {
    rooms;
    constructor(rooms) {
        this.rooms = rooms || [];
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    removeRoom(room) { }
    getRooms() {
        return this.rooms;
    }
}
export {};
