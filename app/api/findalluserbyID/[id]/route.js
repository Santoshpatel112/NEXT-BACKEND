import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const user = users.find((p) => p.id == parseInt(id));
        if (!user) {
            return NextResponse.json({
                message: "user not found",
                sucess: false
            }, { status: 404 })
        }
        return NextResponse.json({
            message: "User found successfully",
            success: true,
            user: user
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: "failed to find user",
            sucess: false
        }, { status: 500 })
    }
}
