import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://ryaaan7:0oLHN9Ml0gD5CEK0@cluster0.vfeg5xa.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
};
