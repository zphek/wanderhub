"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
const user_routes_1 = __importDefault(require("./api/routes/user.routes"));
const discussion_routes_1 = __importDefault(require("./api/routes/discussion.routes"));
const comment_routes_1 = __importDefault(require("./api/routes/comment.routes"));
const post_routes_1 = __importDefault(require("./api/routes/post.routes"));
app.use((0, express_session_1.default)({
    secret: '12345678910',
    resave: false,
    saveUninitialized: false,
}));
app.use((0, cors_1.default)({
    origin: "*"
}));
app.use(express_1.default.json());
app.use("/v1/user", user_routes_1.default);
app.use("/v1/discussion", discussion_routes_1.default);
app.use("/v1/comment", comment_routes_1.default);
app.use("/v1/post", post_routes_1.default);
app.listen(3000, () => {
    console.log("Server levantado en el puerto 3000!");
});
