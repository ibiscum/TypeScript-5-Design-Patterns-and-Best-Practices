class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    discount(discountPercentage) {
        this.price = this.price * (1 - discountPercentage / 100);
    }
}
class Author {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Blog {
    id;
    author;
    constructor(id, author) {
        this.id = id;
        this.author = author;
    }
}
class QueryBuilder {
}
class EmptyQueryBuilder extends QueryBuilder {
}
class SearchService {
    queryBuilder;
    path;
    constructor({ qb = new EmptyQueryBuilder(), path }) {
        this.queryBuilder = qb;
        this.path = path;
    }
}
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
        this.rooms = rooms || []; // Initialize with empty array if not provided
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    removeRoom(room) {
        // Implement logic to remove the room from the house
    }
    getRooms() {
        return this.rooms; // Return a copy to avoid modifying original array
    }
}
class SSHUser {
    privateKey;
    publicKey;
    constructor(privateKey, publicKey) {
        this.privateKey = privateKey;
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }
    getBase64() {
        // Public method to access public data
        return Buffer.from(this.publicKey).toString("base64");
    }
}
export {};
