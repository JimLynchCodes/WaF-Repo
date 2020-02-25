import { connect, Document, Schema, model } from "mongoose";
require('dotenv').config()

let connected = false
let connection: any

export const connectToMongo = async() => {

    console.log('Really connecting to mongo (no mocks)!', connected)
    

    if (connected) 
        return connection
    else {

        console.log('Connecting to mongo...')
        const uri: string = process.env.MONGO_URI;
        
        connection = await connect(uri, (err: any) => {
            if (err) {
                console.log(err.message);
                return err;
            } else {
                console.log("Successfully Connected!");
                connected = true
                return uri;
            }
        });

        return connection
        
    }
}

export interface IBook extends Document {
    title: string;
    author: string;
}

export const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});

const Book = model<IBook>("Book", BookSchema);
export default Book;