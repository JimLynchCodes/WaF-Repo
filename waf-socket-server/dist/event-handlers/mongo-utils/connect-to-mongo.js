"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// require('dotenv').config()
let connected = false;
let connection;
exports.connectToMongo = async () => {
    console.log('Really connecting to mongo (no mocks)!', connected);
    if (connected)
        return connection;
    else {
        console.log('Connecting to mongo...');
        const uri = process.env.MONGO_URI;
        connection = await mongoose_1.connect(uri, (err) => {
            if (err) {
                console.log(err.message);
                return err;
            }
            else {
                console.log("Successfully Connected!");
                connected = true;
                return uri;
            }
        });
        return connection;
    }
};
//# sourceMappingURL=connect-to-mongo.js.map