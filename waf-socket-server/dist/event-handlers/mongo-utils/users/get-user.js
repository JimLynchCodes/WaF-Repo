"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_to_mongo_1 = require("../connect-to-mongo");
const models_1 = __importDefault(require("./models"));
exports.getUser = async (id) => {
    console.log('handling getUser');
    await connect_to_mongo_1.connectToMongo();
    console.log('connected? looking for userId: ', id);
    return await models_1.default.findOne({ userId: id });
};
//# sourceMappingURL=get-user.js.map