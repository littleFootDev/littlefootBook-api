import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const DB = process.env.DATABASE!.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD!
);


async function databaseSetup() {
    const connected: boolean = await connectToDatabase();
    if(!connected) {
        process.exit(1);
    }
};

async function connectToDatabase() {
    try {
        await mongoose.connect(DB);
        console.log("Connecting to database");
        return true;
    } catch (err) {
        console.log("Error while connecting to database");
        return false;
    }
};

export {databaseSetup}