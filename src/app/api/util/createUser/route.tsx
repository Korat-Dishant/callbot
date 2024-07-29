import { supabase } from "@/lib/supa";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const firstName = request.headers.get("firstName");
  const lastName = request.headers.get("lastName");
  const userEmail = request.headers.get("email");
  const contactNo = request.headers.get("contactNo");
  const userType = request.headers.get("userType");

  if (
    firstName &&
    firstName?.length > 0 &&
    lastName &&
    lastName?.length > 0 &&
    userEmail &&
    userEmail?.length > 0 &&
    contactNo &&
    contactNo?.length > 0 &&
    userType
  ) {
    if (userType == "investor") {
      const createInvestor = await supabase.from("investors").insert([
        {
          first_name: firstName,
          last_name: lastName,
          contact_no: contactNo,
          email: userEmail,
        },
      ]);

      console.log("createinvestor database ", createInvestor);

      return NextResponse.json(
        { success: true, userType: userType },
        { status: 200, statusText: "updated investor databse" }
      );
    }
    if (userType == "founder") {
      const createFounder = await supabase.from("founders").insert([
        {
          first_name: firstName,
          last_name: lastName,
          contact_no: contactNo,
          email: userEmail,
        },
      ]);

      console.log("createfounder database ", createFounder);

      return NextResponse.json(
        { success: true, userType: userType },
        { status: 200, statusText: "updated founder databse" }
      );
    }

    return NextResponse.json(
      {},
      { status: 501, statusText: "failed to fetch user form supabase" }
    );
  }
}
