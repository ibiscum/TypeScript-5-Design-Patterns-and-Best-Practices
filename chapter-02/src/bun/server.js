"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server = Bun.serve({
    port: 3000,
    fetch(request) {
        return new Response("Hello World!");
    },
});
console.log(`Listening on localhost:${server.port}`);
//# sourceMappingURL=server.js.map