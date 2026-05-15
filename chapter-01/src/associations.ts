interface Id<T extends string | number> {
  id: T
}

class Author {
  constructor(
    private id: string,
    private name: string,
  ) {}
}

class Blog implements Id<string> {
  id: string

  author: Author

  constructor(id: string, author: Author) {
    this.id = id

    this.author = author
  }
}

const author = new Author('1', 'Theo Despoudis')
const blog = new Blog('1', author)

console.log(blog.author)
