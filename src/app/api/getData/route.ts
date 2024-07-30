import { pool } from "@/db/db";

export async function GET(request: Request) {
  const q2 = "SELECT * FROM PORTAL";
  try {
    const result = await pool.query(q2);
    console.log("res", result);
    console.log("rows", result.rows);
    const data = result.rows.map((item) => {
      Object.keys(item).forEach((key) => {
        item[key] = item[key].trim();
      });
      return item;
    });
    return Response.json({ data: data }, { status: 200 });
  } catch (error) {
    console.error("error ==== ", error);
    return Response.json({ message: "error" }, { status: 500 });
  }
}
