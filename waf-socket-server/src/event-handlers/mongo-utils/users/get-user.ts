import { connectToMongo } from '../connect-to-mongo';
import User, { IUser } from './models';

export const getUser = async (id: string): Promise<IUser> => {

    console.log('handling getUser')

    await connectToMongo()

    console.log('connected? looking for userId: ', id)

    return await User.findOne({ userId: id });

}