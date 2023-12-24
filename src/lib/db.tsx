import { MongoClient } from 'mongodb';


const connectToDatabase = async() => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.8zijal1.mongodb.net/${process.env.MONGODB_DATABASE}`,
  );

  return client;
}

export default connectToDatabase;