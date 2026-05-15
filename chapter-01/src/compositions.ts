class Room {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  getName(): string {
    return this.name
  }
}

class House {
  private rooms: Room[]

  constructor(rooms?: Room[]) {
    this.rooms = rooms || []
  }

  addRoom(room: Room): void {
    this.rooms.push(room)
  }

  removeRoom(room: Room): void {
    this.rooms = this.rooms.filter(r => r !== room)
  }

  getRooms(): Room[] {
    return this.rooms
  }
}

const room1 = new Room('Living Room')
const room2 = new Room('Kitchen')

const house = new House([room1, room2])

console.log(house.getRooms())
console.log(room1.getName())
console.log(room2.getName())

house.addRoom(new Room('Bedroom'))
console.log(house.getRooms())

house.removeRoom(room1)
console.log(house.getRooms())
