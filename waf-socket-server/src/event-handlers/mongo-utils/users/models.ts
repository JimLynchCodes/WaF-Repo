
import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
    userId: string;
}

export const UserSchema = new Schema({
    userId: { type: String, required: true }
});

const User = model<IUser>("User", UserSchema);
export default User;