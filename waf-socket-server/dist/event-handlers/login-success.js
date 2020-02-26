"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const insert_new_user_1 = require("./mongo-utils/users/insert-new-user");
const get_user_1 = require("./mongo-utils/users/get-user");
exports.processLoginSuccess = async (socket, data) => {
    console.log('handling processLoginSuccess');
    const existingUser = await get_user_1.getUser(data.userId);
    console.log('existing user: ', existingUser);
    if (!existingUser) {
        console.log('user doesn\'t exist, oh no!');
        const userToInsert = {
            userId: data.userId
        };
        const insertedUser = await insert_new_user_1.insertNewUser(userToInsert);
        console.log('inserted user.1');
        return insertedUser;
    }
    return existingUser;
};
//# sourceMappingURL=login-success.js.map