"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    userId: { type: String, required: true }
});
const User = mongoose_1.model("User", exports.UserSchema);
exports.default = User;
//# sourceMappingURL=models.js.map