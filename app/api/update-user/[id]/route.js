import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function PUT(request){
    try {
    const {name,phone,branch}=await request.json();
    if(!name ||!phone||!branch){
        return NextResponse.json({
            message :"all field required"
        },{status:404})
    }
    const user=users.findIndex((p)=>p.phone ==phone);
    if(!user){
        return NextResponse.json({
            message:"User does not exit",
            sucess:false
        },{status:404})
    }
    const updateduser={
        name:name,
        phone:phone,
        branch:branch
    }
    users.push(updateduser);
    return NextResponse.json({
        message:"user updated sucessfully",
        sucess:true,
        user:updateduser,
        alluser:users
    },{status:201})
    } catch (error) {
        return NextResponse.json({
            error:error,
            message:"failde to update user",
            sucess:false
        },{status:500})
    }
}