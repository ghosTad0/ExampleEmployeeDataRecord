import Link from "next/link";

export default function NavBar(){
    return (
        <div>
            <div className="navBar">
                <div>
                    <Link href="/pages/add-employee">Add Employee</Link>
                </div>
                <div>
                    <Link href="/pages/list-employees">All Employees</Link>
                </div>
            </div>
        </div>
    )
}