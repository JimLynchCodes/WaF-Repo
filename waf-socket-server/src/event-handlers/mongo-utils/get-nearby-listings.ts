import { connectToMongo } from './connect-to-mongo';
import User, { IUser } from './users/models';

export const getNearbyListings = async (id: any) => {
    
    await connectToMongo()

    try {
        const doc = await User.findOne({userId: id});
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: doc,
            }, null, 2)
        };
    } catch (err) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: err,
            }, null, 2)
        };
    }

}