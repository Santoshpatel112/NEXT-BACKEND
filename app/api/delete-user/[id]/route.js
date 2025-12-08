import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function DELETE(request, { params }){
    try {
        const {id}=await params;
        const userindex=users.findIndex((p)=>p.id==parseInt(id));
        if(userindex === -1){
            return NextResponse.json({
                message :"user not found",
                sucess:false
            },{status:404})
        }
        const deleteuser=users.splice(userindex,1)[0];
        return NextResponse.json({
            message:"user deleted sucessfully",
            deleteduser:deleteuser,
            alluser:users,
            sucess:true
        },{status:200})
        
    } catch (error) {
        return NextResponse.json({
            message :"failed to delete user",
            sucess:false
        },{status:500})
    }
}