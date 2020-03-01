
import { UPDATE_LISTINGS, LISTINGS_REQUESTED } from '../types/listings';
import { UPDATING_MANUALLY_EDITING_ZIPCODE } from '../types/global-app-properties';

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

export const setManuallyEnteringZipcode = (newState: boolean) => {
    console.log('dispatching login success...')
    return {
        type: UPDATING_MANUALLY_EDITING_ZIPCODE,
        payload: newState,
    }
};

