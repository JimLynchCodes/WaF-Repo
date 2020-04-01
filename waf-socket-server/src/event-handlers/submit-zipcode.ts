import { getNearbyListings } from "./mongo-utils/listings/get-nearby-listings";

export const handleSubmitManuallyEnteredZipcode = async (socket: any, data: any) => {
    console.log('bartrrr', data)
}

export const handleSubmitUpdatedLocation = async (socket: any, data: any) => {
    console.log('handling user submitting updated location... ', data)

    const nearbyListings: any = await getNearbyListings(data);

    console.log('got some listings! ', nearbyListings)

    socket.emit('NEARBY_LISTINGS', {
        location: data,
        listings: nearbyListings
    });

}