import "dotenv/config";

export const PORT = parseInt(process.env.PORT ?? "3003");
export const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://localhost";
export const ORIGIN = process.env.ORIGIN ?? "http://localhost:3000/";
export const JWT_SECRET = process.env.JWT_SECRET ?? "AIUSDHGAUISHD";
export const SALT_ROUNDS = process.env.SALT_ROUNDS ?? 10;