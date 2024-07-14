"use client"

import { AddEmployeeFormType } from "@/custom_types_interfaces/add-employee-form-type"
import { employeeAddSchema } from "@/validation_schemas/validate-employee-data"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

export default function AddEmployeeform(){
    const router = useRouter()
    const {register, handleSubmit, formState:{errors}} = useForm<AddEmployeeFormType>({ resolver: zodResolver(employeeAddSchema)})

    async function onEmployeeDataFormSubmit(data: AddEmployeeFormType){
        //post to the endpoint
        const respSendEmpData = await fetch("/api/v0/employee/add", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
              }
        })
        const respSendEmpDataBody = await respSendEmpData.json()
        if (respSendEmpData.status != 201){
            const errMsg = respSendEmpDataBody.errMsg? `Error: ${respSendEmpDataBody.errMsg}`: "Unknown Error occured!"
            alert(errMsg)
            return
        }
        router.push("/pages/list-employees")
        return
    }


    return (
        <div className="employeeForm">
            <form>
                <div className="inputContainer">
                    <label>Username(should be unique):</label>
                    <br></br>
                    <input 
                        className="inputField" 
                        type="text"
                        id="employeeUserName"
                        {...register('employeeUserName')}
                    >
                    </input>
                    <br />
                    {errors.employeeUserName?.message && <i style={{color: 'red', fontSize: '1rem'}}>{errors.employeeUserName?.message}</i>}
                </div>
                <div className="inputContainer">
                    <label>Employee Name:</label>
                    <br></br>
                    <input 
                        className="inputField" 
                        type="text"
                        id="employeeName"
                        {...register('employeeName')}
                    >
                    </input>
                    <br />
                    {errors.employeeName?.message && <i style={{color: 'red', fontSize: '1rem'}}>{errors.employeeName?.message}</i>}
                </div>
                <div className="inputContainer">
                    <label>Employee Age:</label>
                    <br></br>
                    <input 
                        className="inputField"
                        type="text"
                        id="employeeAge"
                        {...register('employeeAge')}
                    >
                    </input>
                    <br />
                    {errors.employeeAge?.message && <i style={{color: 'red', fontSize: '1rem'}}>{errors.employeeAge?.message}</i>}
                </div>
                <div className="inputContainer">
                    <label>Designation:</label>
                    <br></br>
                    <input 
                        className="inputField" 
                        type="text"
                        id="employeeDesig"
                        {...register('employeeDesig')}
                    >
                    </input>
                    <br />
                    {errors.employeeDesig?.message && <i style={{color: 'red', fontSize: '1rem'}}>{errors.employeeDesig?.message}</i>}
                </div>
            </form>

            <div className="empAddSeparation1">
            </div>

            <div className="empAddButton">
                <button onClick={handleSubmit(onEmployeeDataFormSubmit)}>Submit</button>
            </div>
        </div>
    )
}