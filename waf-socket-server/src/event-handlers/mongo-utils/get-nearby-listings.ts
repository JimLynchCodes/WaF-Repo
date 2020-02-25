import Book, { connectToMongo } from './connect-to-mongo';

export const getNearbyListings = async (id) => {
    
    await connectToMongo()

    try {
        const doc = await Book.find({userId: id});
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