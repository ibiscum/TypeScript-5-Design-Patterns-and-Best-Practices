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
export {};
