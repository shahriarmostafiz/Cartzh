import connectMongo from "@/db/connectDb"
import { cartModel } from "@/db/models/cart.model"
import { NextResponse } from "next/server"


export async function POST(request) {
    const {
        productId,
        userId,
        quantity,

    } = request.json()
    const newCartItem = {
        productId,
        userId,
        quantity,
        status: "pending"
    }
    try {
        await connectMongo()
        await cartModel.create(newCartItem)
        return new NextResponse("added to Cart", {
            status: 201
        })
    } catch (error) {
        return new NextResponse("error in adding to cart", {
            status: 500
        })
    }

}