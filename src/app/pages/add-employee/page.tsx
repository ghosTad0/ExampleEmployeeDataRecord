import AddEmployeeform from "@/app/frontend-components/AddEmployeeForm";

export default function page(){
    return (
        <div>
            <div className="empPageHead0">
                <h1>Add Employee</h1>
            </div>
            <div className="empPageContentSpace empPageContentSpaceAdd">
                <div className="empPageContent1">
                    <AddEmployeeform />
                </div>
            </div>
        </div>
    )
}