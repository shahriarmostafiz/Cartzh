"use server"
import { signIn } from "@/auth"
import connectMongo from "@/db/connectDb"
import { revalidatePath } from "next/cache"
import bcrypt from "bcryptjs"
import { createCart, createUser, deleteCartItems, getUserInfo, placeOrder, updateUserAddress, updateWishList } from "@/db/queries"
import nodemailer from "nodemailer"
import { generateEmailHtml } from "@/utils/infoUtils"
import { MyDocument } from "@/components/order/MyDocument"
import { Buffer } from "buffer"
import { pdf } from "@react-pdf/renderer"
import { redirect } from "next/navigation"



export const updateCart = async () => {
    await connectMongo()
    const res = await fetch("https://zh-kart.vercel.app/api/updatecart", { method: "GET", next: { revalidate: 1802 } })

    if (res.status === 200) {
        revalidatePath("/")
    } else {
        throw new Error("error in app")
    }
}


export async function login(info) {
    try {
        const res = await signIn("credentials", {
            email: info.email,
            password: info.password,
            redirect: false
        })

        console.log(res, "after login ");
        revalidatePath("/")
        return res
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}
export async function registerUser(info) {
    const { name, email, password } = info
    console.log(info);

    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser = {
        email,
        password: hashedPassword,
        name
    }
    try {

        const foundUser = await getUserInfo(email)
        if (foundUser) {
            return "found"

        }

        else {
            const user = await createUser(newUser)
            return "user created"
        }


    } catch (error) {
        console.log(error);
        throw new Error("registration failed")
    }
}
export async function addToCart(data) {
    const { productId, userId, quantity } = data
    const cartData = {
        productId, userId,
        quantity: parseInt(quantity),
        status: "pending"
    }
    try {
        const res = await createCart(cartData)
        revalidatePath("/")
        return "success"
    } catch (error) {
        console.log("error in creating cart ");
        return "failed"
    }

}

export async function handleWish({ productId, userId }) {
    try {
        const res = await updateWishList(productId, userId)
        console.log(res, "At index");
        if (res === "updated") {
            revalidatePath("/")
            return "updated"
        }
        else {
            revalidatePath("/")
            return "failed"
        }

    } catch (error) {
        throw error
    }

}

export async function handleOrder(orderInfo) {
    console.log(orderInfo);
    try {
        const res = await placeOrder(orderInfo)
        console.log(res, "in order");
        revalidatePath("/")
        return res
    } catch (error) {
        throw new Error(error)
    }
}

export async function handleAddressEdit(userId, info) {
    await connectMongo()
    console.log(userId);
    console.log(info)

    const updates = {}
    if (info?.billing) {
        updates.billingAddress = info?.billing
    } else if (info?.shipping) {
        updates.shippingAddress = info?.shipping
    }



    try {

        const res = await updateUserAddress(userId, updates)
        console.log(res);
        revalidatePath("/")
        return "successs"
    }
    catch (error) {
        return "error in update "
    }
}
export async function handlePersonalInfo(userId, info) {
    await connectMongo()


    const updates = {
        name: info?.name,
        phone: info?.phone
    }
    try {

        const res = await updateUserAddress(userId, updates)
        console.log(res, "in index ");
        revalidatePath("/")
        return "successs"
    }
    catch (error) {
        console.log(error);
        throw new Error(error)
    }
}






export const sendEmailWithAttachment = async (pdfBuffer, orderData) => {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.Nodemailer_Email,
                pass: process.env.NodeMailer_Pass
            }
        });

        let info = await transporter.sendMail({
            from: process.env.Nodemailer_Email,
            to: orderData.email,
            subject: 'Your Order Details',
            text: 'Congratulations!! Your Order has been placed. Please  find attached your order invoice.',
            html: generateEmailHtml(orderData),
            attachments: [
                {
                    filename: 'order_invoice.pdf',
                    content: pdfBuffer,
                },
            ],
        });

        console.log('Email sent: ', info.response);
        return "success"
    } catch (error) {
        console.error('Error sending email: ', error);
        throw new Error(error)
    }
};

export async function handlePdf(res) {
    const pdfBlob = await pdf(<MyDocument data={res} />).toBlob();
    const pdfBuffer = Buffer.from(await pdfBlob.arrayBuffer());

    try {
        const email = await sendEmailWithAttachment(pdfBuffer, res)
        return "success"

    } catch (error) {
        console.log(error);
        throw new Error(error)
    }

}
export async function handleDeleteFromCart(productId, userId) {
    console.log(productId);
    console.log(userId);
    try {
        const res = await deleteCartItems(productId, userId)
        revalidatePath("/")
        return res
    } catch (error) {
        throw new Error
    }
}


