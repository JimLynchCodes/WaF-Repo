
import { UPDATED_LISTINGS_RECEIVED, LISTINGS_REQUESTED } from '../types/listings';

export const listingsRequested = () => ({
    type: LISTINGS_REQUESTED,
});

// export const updateListings = (listingsObj: any) => {
//     console.log('dispatching login success...')
//     return {
//         type: UPDATE_LISTINGS,
//         payload: listingsObj,
//     }
// };

export const receivedNearbyListings = (location: any, listings: any) => {
    console.log('dispatching login success...')
    return {
        type: UPDATED_LISTINGS_RECEIVED,
        payload: {
            location,
            listings
        },
    }
};



