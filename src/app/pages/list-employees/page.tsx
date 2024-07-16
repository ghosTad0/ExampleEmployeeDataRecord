"use client"
import EmployeeCard from "@/app/frontend-components/EmployeeCard";
import { AddEmployeeFormType } from "@/custom_types_interfaces/add-employee-form-type";
import { employee } from "@prisma/client";
import React from "react";
import { useEffect, useState } from "react";

export default function page(){
    const [employeesData, setEmployeesData] = useState<{id: number, employee_name: string} [] | null>([])

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
    }, [])

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
        </>
    )
}