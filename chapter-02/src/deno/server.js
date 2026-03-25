"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const port = 8080;
const handler = async (req) => {
    const body = "Hello, World!";
    return new Response(body, { status: 200 });
};
Deno.serve({ port }, handler);
console.log(`HTTP server listening on port ${port}`);
//# sourceMappingURL=server.js.map