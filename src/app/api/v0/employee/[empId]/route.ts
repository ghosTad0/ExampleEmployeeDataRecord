import {NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/extensions/db-client";
import apiLogger from "@/utils/extensions/apiLogger";

export async function GET(
    req: NextRequest,
    { params }: { params: { empId: string } }
) {
    const empId = params.empId
    try {
        const employee = await prisma.employee.findUnique({where: {id: Number(empId)}})
        if (employee){
            apiLogger.info(`Fetched employee data: ${JSON.stringify(employee)} to db successfully!!`)
            return NextResponse.json(employee, {status: 200})
        }
        apiLogger.info(`Employee data with empId: ${empId} does not exist!`)
        return  new Response(JSON.stringify({errMsg: `Employee Not found for Id ${empId}`}), {status: 404})
    } catch (e) {
        apiLogger.error(`Failed to get employee data, error: ${e}!`)
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
            apiLogger.info(`Fetched employee data: ${JSON.stringify(employee)} to db successfully!!`)
            await prisma.employee.delete({where: {id: Number(empId)}})
            apiLogger.info("Deleted employee data from db successfully!!")
            return new Response(null, {status: 204})
        }
        apiLogger.info(`Employee data with empId: ${empId} does not exist!`)
        return  new Response(JSON.stringify({errMsg: `Employee Not found for Id ${empId}`}), {status: 404})
    } catch (e) {
        apiLogger.error(`Failed to delete employee data, error: ${e}!`)
        return  new Response(JSON.stringify({errMsg: `Error: ${e}`}), {status: 500})
    }
}