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
        //     redirect("/register?founduser=true")
        // } else {
        else {
            const user = await createUser(newUser)
            return "user created"
        }
        // }

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
    // console.log(cartData);
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
        // console.log(recipeId, "was given ");
        await updateWishList(productId, userId)
    } catch (error) {
        throw error
    }
    revalidatePath("/")
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


    // const updates = {
    //     billingAddress: info?.billing ?? {},
    //     shippingAddress: info?.shipping 
    // }
    try {

        const res = await updateUserAddress(userId, updates)
        // const res = await userModel.findByIdAndUpdate(userId)
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
    // console.log(userId);
    // console.log(info)

    const updates = {
        name: info?.name,
        email: info?.email,
        phone: info?.phone
    }
    try {

        const res = await updateUserAddress(userId, updates)
        // const res = await userModel.findByIdAndUpdate(userId)
        console.log(res, "in index ");
        revalidatePath("/")
        return "successs"
    }
    catch (error) {
        console.log(error);
        return "error in update "
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
            // Configure your email service provider here
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
    // const pdfBlob = await pdf(<MyDocument data={res} />).toBlob();
    // const pdfData = await new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => resolve(reader.result.split(',')[1]);
    //     reader.onerror = reject;
    //     reader.readAsDataURL(pdfBlob);
    // });
    try {
        const email = await sendEmailWithAttachment(pdfBuffer, res)
        return "success"

    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
    // if (email.message === 'Email sent successfully') {
    //     return "sucess"



    // } else {
    //     console.log('Failed to send email: ' + email.message);
    //     return "failed to send pdf"
    // }
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


