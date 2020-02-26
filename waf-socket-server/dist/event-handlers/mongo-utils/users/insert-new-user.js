"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_to_mongo_1 = require("../connect-to-mongo");
const models_1 = __importDefault(require("./models"));
exports.insertNewUser = async (userToInsert) => {
    await connect_to_mongo_1.connectToMongo();
    const user = new models_1.default(userToInsert);
    console.log('inserting user...', user);
    return new Promise((resolve, reject) => {
        user.save((err, user) => {
            if (err) {
                console.log('error inserting', err);
                // reject({
                //     statusCode: 400,
                //     body: JSON.stringify({
                //         error: err,
                //     }, null, 2),
                // })
                resolve(err);
            }
            else {
                console.log('User has been saved! ', user);
                // resolve({
                //     statusCode: 200,
                //     body: JSON.stringify({
                //         data: User,
                //     }, null, 2)
                // })
                resolve(user);
            }
        });
    });
};
//# sourceMappingURL=insert-new-user.js.map