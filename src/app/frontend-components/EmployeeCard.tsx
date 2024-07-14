"use client"

import { useRouter } from "next/navigation"

export default function EmployeeCard(props: any){

    const router = useRouter()

    function navToEmployeeDetails(){
        router.push(`/pages/employee/${props.employeeId}`)
    }

    return (
        <>
            <div onClick={navToEmployeeDetails}>
                <div className="employeeCard">
                    <p>{props.employeeName}</p>
                </div>
            </div>
            <p className="employeeDelete">Delete</p>
        </>

    )
}