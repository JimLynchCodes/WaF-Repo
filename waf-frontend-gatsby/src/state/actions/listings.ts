
import { UPDATE_LISTINGS, LISTINGS_REQUESTED } from '../types/listings';

export const listingsRequested = () => ({
    type: LISTINGS_REQUESTED,
});

export const updateListings = (listingsObj: any) => {
    console.log('dispatching login success...')
    return {
        type: UPDATE_LISTINGS,
        payload: listingsObj,
    }
};

