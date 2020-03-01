import { GLOBAL_APP_PROPERTIES_UPDATED, ACTIVATE_MANUAL_LOCATION_EDIT_MODE } from "../types/global-app-properties";

export interface GeoJSON {
    type: string,
    coordinates: number[]
}

export interface IGlobalAppPropertiesState {
    currentZipcode: number,
    currentGeolocation: GeoJSON,
    manuallyEditingLocation: boolean
}

export const initialState = {
    currentZipcode: 0,
    manuallyEditingLocation: false
};

interface IAction {
    type?: string;
    payload?: unknown;
}

const reducer = (state: IGlobalAppPropertiesState = initialState, action: IAction = {}): IGlobalAppPropertiesState => {

    const { type, payload }: { type?: string | undefined, payload?: unknown } = action;

    switch (type) {

        case GLOBAL_APP_PROPERTIES_UPDATED:
            return Object.assign({}, state, payload)
      
        case ACTIVATE_MANUAL_LOCATION_EDIT_MODE:
            return Object.assign({}, state, {manuallyEditingLocation: (payload as boolean)})

        default:
            return state
    }
};

export default reducer;
