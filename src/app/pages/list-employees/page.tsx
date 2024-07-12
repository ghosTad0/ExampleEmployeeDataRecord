import EmployeeCard from "@/app/frontend-components/EmployeeCard";

export default function page(){
    return (
        <div>
            <div className="empPageHead0">
                <h1>Current Employees</h1>
            </div>
            <div className="empPageContentSpace">
                <div className="empPageContent1">
                    {/* <p>blah1 wrap these in links to navigate, anyway this will be comming as a map</p>
                    <p>blah2</p> */}
                    <EmployeeCard employeeName={"Tad"} employeeId={768} />
                    <EmployeeCard employeeName={"Rim"} employeeId={8798} />
                </div>
            </div>
        </div>
    )
}