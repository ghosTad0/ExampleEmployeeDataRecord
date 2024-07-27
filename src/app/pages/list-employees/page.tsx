"use client"
import CustomSnackbar from "@/app/frontend-components/CustomSnackbar";
import EmployeeCard from "@/app/frontend-components/EmployeeCard";
import { AddEmployeeFormType } from "@/custom_types_interfaces/add-employee-form-type";
import { employee } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

export default function page(){
    const [employeesData, setEmployeesData] = useState<{id: number, employee_name: string} [] | null>([])
    const [alertMsg, setAlertMsg] = useState<string | null>(null)
    const [alertSeverity, setAlertSeverity] = useState<string>("error")
    // const listEmployeesRouter = useRouter()
    // const { redirectedAt, redirectedAfter } = listEmployeesRouter.query

    const queryParams = useSearchParams()
    const redirectedAt = queryParams.get('redirectedAt')
    const redirectedAfter = queryParams.get('redirectedAfter')

    async function redirectedAlert(){
        if (redirectedAt) {
          try {
            const redirectedTimeStamp = parseInt(redirectedAt as string)
            const currentTime = new Date()
            const currentTimeStamp = currentTime.getTime()
            if (Math.abs(currentTimeStamp - redirectedTimeStamp)/1000 < 5){
              setAlertMsg(`Employee ${redirectedAfter} successfully!`)
              setAlertSeverity("success")
              return
            }
          } catch (e) {
            console.log(`Error encountered related with redirect parameters: ${e}`)
            return
          }
        }
        return
      }

    async function fetchEmployeeData(){
        const respSendEmpData = await fetch("/api/v0/employee/list", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              }
        })
        const respSendEmpDataBody = await respSendEmpData.json()
        if (respSendEmpData.status === 200){
            setEmployeesData(respSendEmpDataBody)
            return
        }
        setEmployeesData(null)
        return
    }

    useEffect(() => {
        fetchEmployeeData();
        redirectedAlert();
    }, [])

    console.log(`This is from the list employees page   -    ${alertMsg}`)

    return (
        <>
            <div className="empPageHead0">
                <h1>Current Employees</h1>
            </div>
            <div className="empPageContentSpace">
                <div className="empPageContent1">
                    {employeesData? (
                        <>
                            {employeesData.length? (
                                <>
                                {employeesData.map((emp, index) => 
                                    <React.Fragment key={index}>
                                        <EmployeeCard employeeName={emp.employee_name} employeeId={emp.id} />
                                    </React.Fragment>
                                )}
                                </>
                            ):(
                                <p>Employee records haven't been added yet.</p>
                            )}
                        </>
                    ):(
                        <p>Unable to fetch employee records!</p>
                    )}
                </div>
            </div>
            {alertMsg && <CustomSnackbar message={alertMsg} setAlert={setAlertMsg} severity={alertSeverity} />}
        </>
    )
}