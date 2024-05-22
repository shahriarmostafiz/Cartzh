
import connectMongo from "@/db/connectDb";
import { cartModel } from "@/db/models/cart.model";
import { productModel } from "@/db/models/products.model";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connectMongo()
    // const cart = await cartModel.find()
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


// //     // if (cart) {
// //     //     const result = await cart.updateMany(
// //     //         { createdAt: { $lt: thirtyMinutesAgo }, status: 'pending' },
// //     //         { $set: { status: 'failed' } }
// //     //     );
// //     // }
// // }
// export async function GET() {
//     return Response.json({ "hello" })
// }

// /***
//  * export default async function handler(req, res) {
//   await dbConnect();

//   const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);

//   try {
//     // Find the old cart documents
//     const oldCarts = await Cart.find(
//       { createdAt: { $lt: thirtyMinutesAgo }, status: 'pending' }
//     );

//     // Update the stock for each product and delete the cart document
//     for (const cart of oldCarts) {
//       await Product.findByIdAndUpdate(
//         cart.productId,
//         { $inc: { stock: cart.quantity } }
//       );

//       await Cart.findByIdAndDelete(cart._id);
//     }

//     res.status(200).json({ success: true, deletedCount: oldCarts.length });
//   } catch (error) {
//     console.error('Error updating stock and deleting old carts:', error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// }
//  *
//  */