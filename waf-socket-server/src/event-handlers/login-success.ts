import { insertNewUser } from "./mongo-utils/users/insert-new-user";
import { getUser } from "./mongo-utils/users/get-user";
import { IUser } from "./mongo-utils/users/models";

export const processLoginSuccess = async (socket: any, data: any) => {

    console.log('handling processLoginSuccess')

    const existingUser: IUser = await getUser(data.userId)

    console.log('existing user: ', existingUser)

    if (!existingUser) {

        console.log('user doesn\'t exist, oh no!')
        const userToInsert = {
            userId: data.userId
        }

        const insertedUser = await insertNewUser(userToInsert)

        console.log('inserted user.1')
        return insertedUser

    }

    return existingUser;

}
