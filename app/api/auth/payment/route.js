// import connectMongo from "@/db/connectMongo"
// import { bookingModel } from "@/models/bookings.model"
// import mongoose from "mongoose"
// import { NextResponse } from "next/server"

// export const POST = async (request) => {
//     const {
//         userId,
//         hotelId,
//         checkin, checkout
//     } = await request.json()

//     const bookingInfo = {
//         userId: new mongoose.Types.ObjectId(userId),
//         hotelId: new mongoose.Types.ObjectId(hotelId),
//         checkin,
//         checkout

//     }
//     await connectMongo()
//     try {

//         await bookingModel.create(bookingInfo)
//         return new NextResponse("booking completed", {
//             status: 201,

//         })
//     } catch (error) {
//         console.log(error);
//         return new NextResponse("error in payment", {
//             status: 500
//         })
//     }
// }