import { pool } from "@/db/db";

export async function POST(request: Request) {
  const userID = request.headers.get("userID");
  const condition = request.headers.get("condition");
  const userName = request.headers.get("userName");
  const userEmail = request.headers.get("userEmail");
  const date = request.headers.get("lastDate");

  console.log(userID, condition);
  const q2 = "SELECT * FROM PORTAL";
  const query = `INSERT INTO PORTAL (userid, cause, user_name ,user_email,date) VALUES ('${userID}', '${condition}','${userName}','${userEmail}','${date}');`;
  console.log("date ====" , date);
  console.log("Query ====" , query);
  
  try {
    const result = await pool.query(query);
    // console.log("res", result);
    // console.log("rows", result.rows);
  } catch (error) {
    console.error("error ==== ", error);
  }
  return Response.json({ message: "success" }, { status: 200 });
}
