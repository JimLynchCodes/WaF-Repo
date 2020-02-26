"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_to_mongo_1 = require("./connect-to-mongo");
const models_1 = __importDefault(require("./users/models"));
exports.getNearbyListings = async (id) => {
    await connect_to_mongo_1.connectToMongo();
    try {
        const doc = await models_1.default.findOne({ userId: id });
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: doc,
            }, null, 2)
        };
    }
    catch (err) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: err,
            }, null, 2)
        };
    }
};
//# sourceMappingURL=get-nearby-listings.js.map