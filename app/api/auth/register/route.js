import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import connectMongo from "@/db/connectDb"
import { userModel } from "@/db/models/users.model"


export const POST = async (request) => {

    const {
        name,
        email,
        password
    } = await request.json()
    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser = {
        name,
        email,
        password: hashedPassword
    }
    try {
        await connectMongo()
        await userModel.create(newUser)
        return new NextResponse("User Created", {
            status: 201
        })

    } catch (error) {
        return new NextResponse("Registration Failed", {
            status: 500
        })

    }


}