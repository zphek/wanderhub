"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyJWT(req, res, next) {
    const token = req.get("authorization");
    if (!token) {
        res.json({
            message: "You need to authentificate."
        });
    }
    else {
        jsonwebtoken_1.default.verify(token, '20040915', (err, decoded) => {
            if (err) {
                res.json(err);
            }
            else {
                req.userId = decoded.id;
                next();
            }
        });
    }
}
exports.default = verifyJWT;
