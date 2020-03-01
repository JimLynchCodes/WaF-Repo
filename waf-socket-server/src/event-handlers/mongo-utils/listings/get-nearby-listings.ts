import { connectToMongo } from '../connect-to-mongo';
import Listing, { IListing } from './models';

export const MAX_DISTANCE_FREE_ACCOUNT = 25;

export const getNearbyListings = async (userGeoLocation: any) => {
    
    console.log('looking for nearby listings 1... ', userGeoLocation)
    
    await connectToMongo()
    
    console.log('looking for nearby listings 2... ', userGeoLocation)

    try {
        const doc = await Listing.find(
            {
                location: {
                  $near: {
                    $geometry: userGeoLocation,
                    $maxDistance: MAX_DISTANCE_FREE_ACCOUNT, // distance in meters
                    $minDistance: 0
                  }
                }
             }
        );
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