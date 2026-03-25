class User {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const user = new User("Theo");
console.log(user.getName()); // Output: "Theo"
class BaseApiClient {
    async performFetch(req) {
        const response = await fetch(req);
        if (response.ok) {
            return response.json(); // Assuming JSON response
        }
        else {
            throw new Error(`API request failed with status ${response.status}`);
        }
    }
}
class UsersClient extends BaseApiClient {
    async fetch(req) {
        const data = await this.performFetch(req);
        return data;
    }
}
const client = new UsersClient();
client.fetch("/users");
export {};
