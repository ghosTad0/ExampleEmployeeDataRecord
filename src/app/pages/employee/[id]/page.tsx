export default function Page({ params }: { params: { id: string } }) {

    function getEmployeeById(){
        return 0
    }

    return (
        <div>
            {/* <div>My Post: {params.id}</div>
            <div></div> */}
            <div className="empPageHead0">
                <h1>John Doe's Details</h1>
            </div>
            <div className="empPageContentSpace">
                <div className="empPageContent1">
                    <div>

                        <div className="empDetailsTitle">
                            <p>Username:</p>
                        </div>
                        <div className="empDetailsContent">
                            <p>tad</p>
                        </div>
                        <hr></hr>

                        <div className="empDetailsSpace1">
                        </div>
                        <div className="empDetailsTitle">
                            <p>FullName:</p>
                        </div>
                        <div className="empDetailsContent">
                            <p>tad</p>
                        </div>
                        <hr />

                        <div className="empDetailsSpace1">
                        </div>
                        <div className="empDetailsTitle">
                            <p>Age:</p>
                        </div>
                        <div className="empDetailsContent">
                            <p>tad</p>
                        </div>
                        <hr />

                        <div className="empDetailsSpace1">
                        </div>
                        <div className="empDetailsTitle">
                            <p>Designation:</p>
                        </div>
                        <div className="empDetailsContent">
                            <p>tad</p>
                        </div>
                        <hr />

                    </div>
                </div>
            </div>
        </div>
    )
}