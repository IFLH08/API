import {connectDB} from "../utils/sql.js";

export const getUsers = async (req,res)=> {
    const sql = connectDB();
    const data = await sql.query("select * from Users");
    console.log(data.rows);
    res.json(data.rows);
};

export const getUser = async(req,res)=>{
    const sql= connectDB();
    const query = {text: "select * from users where id = $1", values: [req.params.id],};
    const data = await sql.query(query);
    console.log(data.rows);
    res.json(data.rows);
}
export const postUser = async(req,res)=>{
    const {name,username,password}=req.body;
    const sql= connectDB();
    const query= {
        text: "insert into(name,username,password) values($1,$2,$3)",
        values:[name,username,password],
    };
    const data = await sql.query(query);
    res.json(data.rows);
}
export const putUser = async(req,res)=>{
    const {name,username,password}=req.body;
    const sql= connectDB();
    const query= {
        text: "update users set name=$1, username=$2, password=$3 where id=$4",
        values:[name,username,password],
    };
    const data = await sql.query(query);
    res.json(data.rows);
}

export const deleteUser = async(req,res)=>{
    const {name,username,password}=req.body;
    const sql= connectDB();
    const query= {
        text: "delete form users where id = $1",
        values:[req.params.id],
    };
    const data = await sql.query(query);
    res.status(200).json({msg:"ya se borro"});
}