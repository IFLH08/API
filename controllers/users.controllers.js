import {connectDB} from "../utils/sql.js";

export const getUsers = async (req,res)=> {
    const sql = connectDB();
    const data = await sql.query("select * from Users");
    console.log(data.rows);
    res.json(data.rows);
};