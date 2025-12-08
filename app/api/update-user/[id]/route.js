import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function PUT(request, { params }){
    try {
    const { id } = await params;
    const {name,phone,branch}=await request.json();
    if(!name ||!phone||!branch){
        return NextResponse.json({
            message :"all field required"
        },{status:400})
    }
    const userIndex=users.findIndex((p)=>p.id == parseInt(id));
    if(userIndex === -1){
        return NextResponse.json({
            message:"User does not exist",
            sucess:false
        },{status:404})
    }
    const updateduser={
        ...users[userIndex],
        name:name,
        phone:phone,
        branch:branch
    }
    users[userIndex] = updateduser;
    return NextResponse.json({
        message:"user updated sucessfully",
        sucess:true,
        user:updateduser,
        alluser:users
    },{status:200})
    } catch (error) {
        return NextResponse.json({
            error:error,
            message:"failed to update user",
            sucess:false
        },{status:500})
    }
}