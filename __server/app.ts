import express from "express";
import cors from "cors";
const app = express();
import userRoutes from "./api/routes/user.routes";

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use("/v1/user", userRoutes);

app.listen(3000, ()=>{
    console.log("Server levantado en el puerto 3000!");
});