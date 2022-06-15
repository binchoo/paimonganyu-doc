import { Buffer } from "buffer";

export const Base64 = {
  encode(data) {
    return Buffer.from(data, "binary").toString("base64");
  },
  decode(data) {
    return Buffer.from(data, "base64").toString("binary");
  },
};
