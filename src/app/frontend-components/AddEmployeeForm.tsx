export default function AddEmployeeform(){
    return (
        <div className="employeeForm">
            <form>
                <div className="inputContainer">
                    <label>Username(should be unique):</label>
                    <br></br>
                    <input className="inputField" type="text"></input>
                </div>
                <div className="inputContainer">
                    <label>Employee Name:</label>
                    <br></br>
                    <input className="inputField" type="text"></input>
                </div>
                <div className="inputContainer">
                    <label>Employee Age:</label>
                    <br></br>
                    <input className="inputField" type="text"></input>
                </div>
                <div className="inputContainer">
                    <label>Designation:</label>
                    <br></br>
                    <input className="inputField" type="text"></input>
                </div>
            </form>
            <div className="empAddSeparation1">
            </div>
            <div className="empAddButton">
                <button>Submit</button>
            </div>
        </div>
    )
}