
import { UPDATE_LISTINGS, LISTINGS_REQUESTED } from '../types/listings';
import { ACTIVATE_MANUAL_LOCATION_EDIT_MODE, SUBMIT_MANUALLY_ENTERED_ZIPCODE, SUBMIT_UPDATED_LOCATION } from '../types/global-app-properties';
import { GeoJSON } from '../reducers/global-app-properties';

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

export const setManuallyEnteringZipcode = (newState: boolean) => {
    console.log('dispatching login success...')
    return {
        type: ACTIVATE_MANUAL_LOCATION_EDIT_MODE,
        payload: newState,
    }
};

export const submitManuallyEnteredZipcode = (newZipcode: string | number) => {
    console.log('dispatching login success... ', newZipcode)
    return {
        type: SUBMIT_MANUALLY_ENTERED_ZIPCODE,
        payload: newZipcode,
    }
};

export const submitUpdatedLocation = (newLocation: GeoJSON) => {
    console.log('dispatching login success... ', newLocation)
    return {
        type: SUBMIT_UPDATED_LOCATION,
        payload: newLocation,
    }
};

