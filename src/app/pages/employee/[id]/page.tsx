export default function Page({ params }: { params: { id: string } }) {

    function getEmployeeById(){
        return 0
    }

    return (
        <div>
            <div>My Post: {params.id}</div>
            <div></div>
        </div>
    )
}