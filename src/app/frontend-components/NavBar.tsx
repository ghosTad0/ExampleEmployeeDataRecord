import getFrontendConfigs from "@/ssr_components/getFrontendConfigs";
import Link from "next/link";

export default async function NavBar(props: any){
    const feConfigs: any = await getFrontendConfigs()
    console.log(feConfigs)
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
            <div className="navBarMetaData">
                <p className="appVersionStyle">AppVersion: {feConfigs.app_version}</p>
            </div>
        </div>
    )
}