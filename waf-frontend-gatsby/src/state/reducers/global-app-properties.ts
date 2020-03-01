import { GLOBAL_APP_PROPERTIES_UPDATED, UPDATING_MANUALLY_EDITING_ZIPCODE } from "../types/global-app-properties";

export interface IGlobalAppPropertiesState {
    currentZipcode: number,
    manuallyEditingZipcode: boolean
}

export const initialState = {
    currentZipcode: 0,
    manuallyEditingZipcode: false
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
      
        case UPDATING_MANUALLY_EDITING_ZIPCODE:
            return Object.assign({}, state, {manuallyEditingZipcode: (payload as boolean)})

        default:
            return state
    }
};

export default reducer;
