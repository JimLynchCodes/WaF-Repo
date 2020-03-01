import { getNearbyListings } from "./mongo-utils/listings/get-nearby-listings";

export const handleSubmitManuallyEnteredZipcode = async (socket: any, data: any) => {
    console.log('bartrrr', data)
}

export const handleSubmitUpdatedLocation = async (socket: any, data: any) => {
    console.log('handling user submitting updated location... ', data)

    const nearbyListings: any = await getNearbyListings(data.location);
    
    socket.emit('NEARBY_LISTINGS', {
        data: {
            location: data.location,
            listings: nearbyListings
        }
    });

}