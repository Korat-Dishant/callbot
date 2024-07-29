export async function POST(request: Request) {
  const userID = request.headers.get("userID");
  const condition = request.headers.get("condition");
  console.log(userID, condition);

  return Response.json({message: "success"}, { status: 200 });
}
