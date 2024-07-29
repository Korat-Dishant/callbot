import { pool } from "@/db/db";

export async function POST(request: Request) {
  const userID = request.headers.get("userID");
  const condition = request.headers.get("condition");
  console.log(userID, condition);
  const q2 ="SELECT * FROM PORTAL"
  const query = `INSERT INTO PORTAL (userid, cause) VALUES (${userID}, ${condition});`
  try {
    const result = await pool.query(query);
    console.log("res", result);
    console.log("rows", result.rows);
  } catch (error) {
    console.error("error ==== ", error);
  }
  return Response.json({ message: "success" }, { status: 200 });
}
