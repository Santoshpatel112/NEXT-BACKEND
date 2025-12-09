import {NextResponse } from "next/server"

export async function GET(request){

    // to acess the header
    const requestheader=new Headers(request.headers);

    const authheader=requestheader.get("Authorization");

    console.log("authheader",authheader);
    return NextResponse.json({
        data :"hello from the profile route",
        sucess :true
    },{status:201})
}