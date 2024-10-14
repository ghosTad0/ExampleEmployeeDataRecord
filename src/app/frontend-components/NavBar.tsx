import getFrontendConfigs from "@/ssr_components/getFrontendConfigs";
import { read } from "fs";
import Link from "next/link";
import { useEffect, useState } from "react";

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
                <p className="appVersionStyle">ConfigDemoValue: {feConfigs.config_demo_value}</p>
            </div>
        </div>
    )
}