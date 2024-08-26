import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const res = await request.json();
    console.log(res);

    const data =
      await sql`INSERT INTO todos(id,taskname,taskdescription) VALUES(${res.id},${res.taskname},${res.taskdescription})`;
    console.log(data);

    return NextResponse.json({
      data,
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
