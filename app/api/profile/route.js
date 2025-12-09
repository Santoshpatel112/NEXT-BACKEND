import {NextResponse } from "next/server"
import { headers } from "next/headers"
export async function GET(request){

    // to acess the header
    // const requestheader=new Headers(request.headers);

    // const authheader=requestheader.get("Authorization");

    // console.log("authheader",authheader);

    const headerlist=await headers();
    const authheader=headerlist.get("Authorization");
    console.log("authheader from next ",authheader);
    return NextResponse.json({
        data :"hello from the profile route",
        sucess :true
    },{status:201})
}