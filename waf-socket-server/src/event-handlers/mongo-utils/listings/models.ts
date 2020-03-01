
import { Document, Schema, model } from "mongoose";

export interface GeoJSON {
    type: string
    coordinates: number[]
}

export interface IListing extends Document {
    listingId: string
    location: GeoJSON
    createdBy: string
    title: string
    description: string
    imageUrl: string
    dateCreated: Date
    messageThreads: string[]
}

export const ListingSchema = new Schema({
    listingId: { type: String, required: true },
    createdBy: { type: String, required: true },
    location: { type: Object, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    imageUrl: { type: String, required: false },
    dateCreated: { type: Date, required: false },
    messageThreads: { type: Array, required: true }
});

const Listing = model<IListing>("Listing", ListingSchema);
export default Listing;