import {NextRequest, NextResponse} from "next/server";
import { employeeAddSchema } from "../../../../../validation_schemas/validate-employee-data"
import prisma from "@/utils/extensions/db-client";

export async function POST(
    req: NextRequest
) {
    const reqBody = await req.json()
    let validatedEmpData: any = null
    try {
        validatedEmpData = employeeAddSchema.parse({
            employeeUserName: reqBody.employeeUserName,
            employeeName: reqBody.employeeName,
            employeeAge: reqBody.employeeAge.toString(),  //if using z,string,transform to int, we have to convert to string here.
            employeeDesig: reqBody.employeeDesig,
        })

        //Now add to the database
        const addEmployeeOutput = await prisma.employee.create({
            data: {
                employee_username: validatedEmpData.employeeUserName,
                employee_name: validatedEmpData.employeeName,
                employee_age: validatedEmpData.employeeAge,
                employee_designation: validatedEmpData.employeeDesig
            }
        })
    } catch (e) {
        console.log(e)
        return NextResponse.json({errMsg: `error occured-  ${e}`}, {status: 500})
    }
    console.log(validatedEmpData)
    return NextResponse.json({status: "ok"}, {status: 201})
}