import { employeeAddSchema } from "@/validation_schemas/validate-employee-data";
import apiLogger from "./apiLogger";

export default function addEmployeeValidator(reqBody: any){
    try{
        const validatedEmpData = employeeAddSchema.parse({
            employeeUserName: reqBody.employeeUserName,
            employeeName: reqBody.employeeName,
            employeeAge: reqBody.employeeAge.toString(),  //if using z,string,transform to int, we have to convert to string here.
            employeeDesig: reqBody.employeeDesig,
        })
        apiLogger.info("Employee data from client validated successfully!!")
        return validatedEmpData
    }catch(e){
        apiLogger.error(`Employee data from client validated failure!, error: ${e}`)
        return null
    }
}