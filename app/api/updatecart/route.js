
import connectMongo from "@/db/connectDb";
import { cartModel } from "@/db/models/cart.model";
import { productModel } from "@/db/models/products.model";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connectMongo()
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
    try {
        const oldCarts = await cartModel.find(
            { createdAt: { $lt: thirtyMinutesAgo }, status: 'pending' }

        );

        for (const cart of oldCarts) {
            await productModel.findByIdAndUpdate(
                cart.productId,
                { $inc: { stock: cart.quantity } }
            );

            await cartModel.findByIdAndDelete(cart._id);
        }
        revalidatePath("/")
        // res.status(200).json({ success: true, deletedCount: oldCarts.length });
        return new NextResponse("CartUpdated", {
            status: 200
        })
    } catch (
    error
    ) {
        return new NextResponse("failed", {
            status: 500
        })
    }
}



