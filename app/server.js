import app from "./app.js";
import { PORT } from './config.js';
import userRouter from './routes/users.routes.js'; 
import express from "express"; 



app.use(express.json()); // Middleware aplicado para leer peticion tipo post
app.use(userRouter);     // Rutas aplicadas

app.listen(PORT);
console.log("server on port", PORT)


process.on("SIGTERM", () => server.close(() => process.exit(0)));
process.on("SIGINT", () => server.close(() => process.exit(0)));