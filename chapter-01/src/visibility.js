import { Buffer } from "node:buffer";
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
        return Buffer.from(this.publicKey).toString("base64");
    }
}
