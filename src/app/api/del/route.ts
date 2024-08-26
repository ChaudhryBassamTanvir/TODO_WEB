import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export const DELETE = async (request: NextRequest) => {
  try {
    const res = await request.json();
    console.log(res.id);

    const data = await sql`DELETE FROM todos WHERE id = ${res.id} RETURNING *`;
console.log(data);

    return NextResponse.json({
      message: "Deleted Successfully",
      data
    });

  } catch (error:any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message });
  }
};
