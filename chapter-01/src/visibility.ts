import { Buffer } from "node:buffer";

class SSHUser {
  constructor(
    private privateKey: string,

    public publicKey: string,
  ) {
    this.privateKey = privateKey

    this.publicKey = publicKey
  }

  public getBase64(): string {
    return Buffer.from(this.publicKey).toString("base64")
  }
}

const user = new SSHUser("privateKey", "publicKey")

console.log(user.getBase64());
