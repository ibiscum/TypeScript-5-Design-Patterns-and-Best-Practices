class BaseClient {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.baseUrl = baseUrl;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
}
class UsersApiClient extends BaseClient {
    constructor(baseUrl) {
        super(baseUrl);
    }
    getUsers() {
        console.log(`Fetching users from ${this.getBaseUrl()}/users`);
    }
}
export {};
