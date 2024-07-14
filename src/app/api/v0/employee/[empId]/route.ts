import {NextRequest as req, NextResponse as res} from "next/server";

export async function GET(
    request: req,
    { params }: { params: { empId: string } }
) {
    const empId = params.empId // 'a', 'b', or 'c'
}