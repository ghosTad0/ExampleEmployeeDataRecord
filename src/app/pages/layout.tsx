import Head from "next/head"

import { Metadata } from 'next'
import NavBar from "../frontend-components/NavBar"
 
export const metadata: Metadata = {
  title: 'Employee Record Book',
}

export default function PagesLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <NavBar />
            <div className="postNvBrSpace">
            </div>
            <section>
                {children}
            </section>
        </>
    )
  }