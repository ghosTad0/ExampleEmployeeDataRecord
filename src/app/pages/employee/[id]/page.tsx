"use client"
import { employee } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { id: string } }) {
    const [employee, setEmployee] = useState<employee|null>(null)
    const router = useRouter()

    async function getEmployeeById(){
        const getEmpRes = await fetch(`/api/v0/employee/${params.id}`, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })
        if (getEmpRes.ok){
            const employeeData = await getEmpRes.json()
            setEmployee(employeeData)
        }
        return
    }

    async function deleteEmployee(){
        const deleteEmpRes = await fetch(`/api/v0/employee/${params.id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            }
        })
        if (deleteEmpRes.status === 204){
            const redirectedAt = new Date()
            const redirectParams = new URLSearchParams({redirectedAt: `${redirectedAt.getTime()}`, redirectedAfter: 'deleted'}).toString()
            router.push(`/pages/list-employees?${redirectParams}`)
            return
        }
        const delResMsg = await deleteEmpRes.json()
        alert(`Delete Failed: ${delResMsg}`)
        return
    }

    useEffect(() => {
        getEmployeeById()
    }, [])

    return (
        <div>
            {/* <div>My Post: {params.id}</div>
            <div></div> */}
            <div className="empPageHead0">
                <h1>{employee ? `${employee.employee_name}'s Details` : "<employee>'s Details"}</h1>
            </div>
            <div className="empPageContentSpace">
                <div className="empPageContent1">
                    <div>

                        <div className="empDetailsTitle">
                            <p>Username:</p>
                        </div>
                        <div className="empDetailsContent">
                            <p>{employee? employee.employee_username: "<username>"}</p>
                        </div>
                        <hr></hr>

                        <div className="empDetailsSpace1">
                        </div>
                        <div className="empDetailsTitle">
                            <p>Name:</p>
                        </div>
                        <div className="empDetailsContent">
                            <p>{employee? employee.employee_name: "<name>"}</p>
                        </div>
                        <hr />

                        <div className="empDetailsSpace1">
                        </div>
                        <div className="empDetailsTitle">
                            <p>Age:</p>
                        </div>
                        <div className="empDetailsContent">
                            <p>{employee? employee.employee_age: "<age>"}</p>
                        </div>
                        <hr />

                        <div className="empDetailsSpace1">
                        </div>
                        <div className="empDetailsTitle">
                            <p>Designation:</p>
                        </div>
                        <div className="empDetailsContent">
                            <p>{employee? employee.employee_designation: "<designation>"}</p>
                        </div>
                        <hr />

                    </div>
                    <div className="empDetailsSpace1">
                    </div>
                    <div>
                        <button 
                            style={{backgroundColor: "black", borderColor: "green", color: "yellow", padding: "0.7rem", fontSize: "1rem", borderRadius: "0.5rem"}}
                            onClick={() => deleteEmployee()}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

