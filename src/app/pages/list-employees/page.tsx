import EmployeeDetailsPage from "@/app/frontend-components/EmployeeDetailsPage";
import { Suspense } from "react";

export const dynamic = "force-dynamic"


export default function Page() {
    return (
      <>
          <Suspense fallback={<p>loading...</p>}>
            <EmployeeDetailsPage />
          </Suspense>
      </>
    )
  }