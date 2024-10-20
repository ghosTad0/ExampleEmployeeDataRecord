import {NextRequest, NextResponse} from "next/server";

export async function GET(
    req: NextRequest
) {
    try {
        return NextResponse.json({state: "active"}, {status: 200})
    } catch (e) {
      return  new Response(JSON.stringify({errMsg: `Error: ${e}`}), {status: 500})
    }
}