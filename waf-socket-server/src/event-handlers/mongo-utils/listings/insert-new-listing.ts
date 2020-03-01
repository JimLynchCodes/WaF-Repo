import { connectToMongo } from '../connect-to-mongo';
import User from './models'

export const insertNewUser = async (userToInsert: any) => {

    await connectToMongo()

    const user = new User(userToInsert);

    console.log('inserting user...', user)
    return new Promise((resolve, reject) => {

        user.save(
            (err: any, user: any) => {
                if (err) {
                    console.log('error inserting', err)
                    resolve(err)
                }
                else {
                    console.log('User has been saved! ', user)
                    resolve(user)
                }
            }

        )

    });

}
