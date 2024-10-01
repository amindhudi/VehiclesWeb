// db.ts

import { MongoClient, Db } from 'mongodb';

const MONGO_URI = 'mongodb://localhost:27017';
const MONGO_DB_NAME = 'your-database-name';

let client: MongoClient;
let db: Db;

export const connectToDatabase = async () => {
  if (!client) {
    client = new MongoClient(MONGO_URI);
    await client.connect();
    db = client.db(MONGO_DB_NAME);
  }
  return db;
};

export const getCollection = async (collectionName: string) => {
  const database = await connectToDatabase();
  return database.collection(collectionName);
};
