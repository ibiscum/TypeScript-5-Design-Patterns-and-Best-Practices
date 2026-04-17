import { Buffer } from 'node:buffer';

class Product {
  constructor(
    private name: string,
    private price: number,
  ) {
    this.name = name
    this.price = price
  }

  public getName(): string {
    return this.name
  }

  public getPrice(): number {
    return this.price
  }

  public discount(discountPercentage: number): void {
    this.price = this.price * (1 - discountPercentage / 100)
  }
}

const product = new Product("Laptop", 1000)
console.log(product.getName()) // Output: Laptop
console.log(product.getPrice()) // Output: 1000

product.discount(10)
console.log(product.getPrice()) // Output: 900

interface Identifiable<T extends string | number> {
  id: T
}

class Author {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}

class Blog implements Identifiable<string> {
  id: string
  author: Author

  constructor(id: string, author: Author) {
    this.id = id
    this.author = author
  }
}

const author = new Author("a1", "John Doe")
const blog = new Blog("b1", author)

console.log(blog.id) // Output: b1
console.log(blog.author.name) // Output: John Doe

class QueryBuilder {}

class EmptyQueryBuilder extends QueryBuilder {}

interface SearchParams {
  qb?: QueryBuilder
  path: string
}

class SearchService {
  queryBuilder?: QueryBuilder
  path: string

  constructor({ qb = new EmptyQueryBuilder(), path }: SearchParams) {
    this.queryBuilder = qb
    this.path = path
  }
}

const searchService = new SearchService({ path: "/search" })
console.log(searchService.path) // Output: /search
console.log(searchService.queryBuilder instanceof EmptyQueryBuilder) // Output: true

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
    this.rooms = rooms || [] // Initialize with empty array if not provided
  }

  addRoom(room: Room): void {
    this.rooms.push(room)
  }

  removeRoom(room: Room): void {
    // Implement logic to remove the room from the house
    console.log(`Removing room: ${room.getName()}`)


  }

  getRooms(): Room[] {
    return this.rooms // Return a copy to avoid modifying original array
  }
}

const house = new House()
const livingRoom = new Room("Living Room")
const kitchen = new Room("Kitchen")

house.addRoom(livingRoom)
house.addRoom(kitchen)

console.log(house.getRooms().map(room => room.getName())) // Output: ["Living Room", "Kitchen"]

class SSHUser {
  constructor(
    private privateKey: string,
    public publicKey: string,
  ) {
    this.privateKey = privateKey
    this.publicKey = publicKey
  }

  public getBase64(): string {
    // Public method to access public data
    return Buffer.from(this.publicKey).toString("base64")
  }
}

const sshUser = new SSHUser("privateKey123", "publicKey456")
console.log(sshUser.getBase64()) // Output: cHVibGljS2V5NDU2
