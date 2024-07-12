"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const initRouter = useRouter()

  useEffect(() => {
    initRouter.replace('/pages/list-employees')
  })
  return (
    <main className={styles.main}>
      {/* <div>
        <p className="AppTitle">Employee Data</p>
      </div> */}
      <></>
    </main>
  );
}
