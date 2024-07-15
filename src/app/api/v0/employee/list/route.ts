import {NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/extensions/db-client";

export async function GET(
    req: NextRequest
) {
    try {
        const employees = await prisma.employee.findMany({select: {id: true, employee_name: true}, orderBy: {id: 'asc'}})
        return NextResponse.json(employees, {status: 200})
      } catch (e) {
        return  new Response(JSON.stringify({errMsg: `Error: ${e}`}), {status: 500})
      }
}