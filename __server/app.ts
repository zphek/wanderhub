import express from "express";
import cors from "cors";
import session from "express-session";
const app = express();

import userRoutes from "./api/routes/user.routes";
import discussionRoutes from "./api/routes/discussion.routes";
import commentRoutes from "./api/routes/comment.routes";
import postRoutes from "./api/routes/post.routes";

app.use(session({
    secret: '12345678910',
    resave: false,
    saveUninitialized: false,
}));

app.use(cors({
    origin: "*"
}));

app.use(express.json());
app.use("/v1/user", userRoutes);
app.use("/v1/discussion", discussionRoutes);
app.use("/v1/comment", commentRoutes);
app.use("/v1/post", postRoutes);

app.listen(3000, ()=>{
    console.log("Server levantado en el puerto 3000!");
});