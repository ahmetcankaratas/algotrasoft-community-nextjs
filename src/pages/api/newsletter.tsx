import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/db";

interface Data {
  email: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return;
  }

  const data: Data = req.body;

  const { email } = data;

  if (!email || !email.includes("@")) {
    res.status(422).json({
      message: "Invalid email address.",
    });
    return;
  }

  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  const db = client.db();

  const existingUser = await db
    .collection("newsletter")
    .findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "Email address Signed up already!" });
    client.close();
    return;
  }

  try {
    await db.collection("newsletter").insertOne({
      email: email,
    });
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Inserting data failed!" });
    return;
  }

  res.status(201).json({ message: "Signed up!" });
};

export default handler;
