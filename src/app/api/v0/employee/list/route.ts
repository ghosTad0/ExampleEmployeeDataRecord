import {NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/extensions/db-client";
import apiLogger from "@/utils/extensions/apiLogger";

export async function GET(
    req: NextRequest
) {
    try {
        const employees = await prisma.employee.findMany({select: {id: true, employee_name: true}, orderBy: {id: 'asc'}})
        apiLogger.info("employee list fetch from db success!!")
        return NextResponse.json(employees, {status: 200})
    } catch (e) {
      return  new Response(JSON.stringify({errMsg: `Error: ${e}`}), {status: 500})
    }
}