import { hashPassword } from "../utils/hash.js";
import { connectDB } from "../utils/sql.js";

export const login = async (req, res) => {
  const sql = connectDB();
  const query = {
    text: "select * from users where username = $1",
    values: [req.body.username],
  };
  const data = await sql.query(query);
  // console.log(data.rows);
  // console.log(data.rows.length);
  if (data.rows.length === 0) {
    res.json({ isLogin: false, user: {} });
    return;
  }
  const salt = data.rows[0].password.substring(0,process.env.Salt);
  const hash = hashPassword(req.body.password, salt);
  const saltedhash=salt + hash;
  if (saltedhash === data.rows[0].password) {
    res.json({ isLogin: true, user: data.rows[0] });
    return;
  } else {
    res.json({ isLogin: false, user: {} });
  }
};
