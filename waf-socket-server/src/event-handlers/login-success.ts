import { getUser } from "./mongo-utils/get-user";

export const processLoginSuccess = async (socket: any, data: any) => {

    const existingUser = getUser(data.userId)

    if (existingUser) {

    }

    return 42;

}
