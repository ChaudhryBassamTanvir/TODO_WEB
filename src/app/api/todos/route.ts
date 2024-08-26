import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const data = await sql`SELECT * FROM todos`;
    console.log(data.rows);

    return NextResponse.json({
      todos: data.rows,
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
export const dynamic = "force-dynamic";
