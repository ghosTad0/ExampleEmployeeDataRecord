import {NextRequest, NextResponse} from "next/server";
// import { employeeAddSchema } from "../../../../../validation_schemas/validate-employee-data"
import prisma from "@/utils/extensions/db-client";
import addEmployeeValidator from "@/utils/extensions/addEmployeeValidator";
import apiLogger from "@/utils/extensions/apiLogger";

export async function POST(
    req: NextRequest
) {
    const reqBody = await req.json()
    let validatedEmpData: any = null
    try {
        // validatedEmpData = employeeAddSchema.parse({
        //     employeeUserName: reqBody.employeeUserName,
        //     employeeName: reqBody.employeeName,
        //     employeeAge: reqBody.employeeAge.toString(),  //if using z,string,transform to int, we have to convert to string here.
        //     employeeDesig: reqBody.employeeDesig,
        // })
        validatedEmpData = addEmployeeValidator(reqBody)

        if (validatedEmpData != null){
            //Now add to the database
            const addEmployeeOutput = await prisma.employee.create({
                data: {
                    employee_username: validatedEmpData.employeeUserName,
                    employee_name: validatedEmpData.employeeName,
                    employee_age: validatedEmpData.employeeAge,
                    employee_designation: validatedEmpData.employeeDesig
                }
            })
            apiLogger.info("Added employee data to db successfully!!")
        } else {
            apiLogger.error("Adding Employee data to db failed due to an issue with validation!")
        }
    } catch (e) {
        apiLogger.error(`Adding Employee data to an unknown issue, error: ${e}`)
        return  new Response(JSON.stringify({errMsg: `error occured-  ${e}`}), {status: 500})
    }
    apiLogger.info(`Validated Data: ${JSON.stringify(validatedEmpData)}`)
    return NextResponse.json({status: "ok"}, {status: 201})
}