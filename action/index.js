"use server"
import { signIn } from "@/auth"
import connectMongo from "@/db/connectDb"
import { revalidatePath } from "next/cache"

export const updateCart = async () => {
    await connectMongo()
    const res = await fetch("http://localhost:3000/api/updatecart", { method: "GET", next: { revalidate: 1800 } })

    if (res.status === 200) {
        revalidatePath("/")
    } else {
        throw new Error("error in app")
    }
}
export async function login(formData) {
    try {
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        })
        return res
    } catch (error) {
        throw new Error(error)
    }
}