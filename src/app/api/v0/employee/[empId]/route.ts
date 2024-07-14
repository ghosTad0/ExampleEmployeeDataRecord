import {NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/extensions/db-client";

export async function GET(
    req: NextRequest,
    { params }: { params: { empId: string } }
) {
    const empId = params.empId
    try {
        const employee = await prisma.employee.findUnique({where: {id: Number(empId)}})
        if (employee){
            return NextResponse.json(employee, {status: 200})
        }
        return  new Response(JSON.stringify({errMsg: `Employee Not found for Id ${empId}`}), {status: 404})
    } catch (e) {
        return  new Response(JSON.stringify({errMsg: `Error: ${e}`}), {status: 500})
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { empId: string } }
) {
    const empId = params.empId
    try {
        const employee = await prisma.employee.findUnique({where: {id: Number(empId)}})
        if (employee){
            await prisma.employee.delete({where: {id: Number(empId)}})
            return new Response(null, {status: 204})
        }
        return  new Response(JSON.stringify({errMsg: `Employee Not found for Id ${empId}`}), {status: 404})
    } catch (e) {
        return  new Response(JSON.stringify({errMsg: `Error: ${e}`}), {status: 500})
    }
}