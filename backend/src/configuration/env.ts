import "dotenv/config";

export const PORT = parseInt(process.env.PORT ?? "3003");
export const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://localhost";
export const ORIGIN = process.env.ORIGIN ?? "http://localhost:3000/";