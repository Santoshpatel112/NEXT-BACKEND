import { NextResponse, userAgent } from "next/server";
import { users } from "../hello/route";

export async function POST(request){
   try {
     const {name ,phone,branch}=await request.json();
    if(!name ||!phone || !branch){
        return NextResponse.json({
            message :"All field must be required",
            sucess :false
        },{status:404})
    }
    const exitinguser=users.find((user)=>user.phone==phone);
    if(exitinguser){
        return NextResponse.json({
            message :"Phone no alredy exit",
            sucess :false
        },{status:404})
    }

    const newuser={
        id:users.length+1,
        name :name,
        phone:phone,
        branch:branch
    }
    users.push(newuser);

    return NextResponse.json({
        message:"new user created sucessfully",
        users:newuser,
        alluser:users
    },{status:201})
   } catch (error) {
    return NextResponse.json({
        message :"Error failed to crete user",
        sucess:false,
        Error:error
    },{status:500})
   }
}