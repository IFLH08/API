import "dotenv/config"
import express from "express";
import indexRoutes from"./routes/index.routes.js";
import usersRoutes from"./routes/users.routes.js";

const app= express();
const port = 5000;



app.use(indexRoutes);
app.use(usersRoutes);


app.listen(port,console.log("http://localhost:"+port));