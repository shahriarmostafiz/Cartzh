import { getAllProducts } from "@/db/queries";
import { NextResponse } from "next/server";

const replaceidinArray = (array) => {
    // const mappedArray = array.map(item => {
    //     return {
    //         id: item._id.toString(),
    //         ...item
    //     }
    // }).map(({ _id, ...rest }) => rest)
    const mappedArray = array.map(({ id, ...rest }) => rest)
    return mappedArray
}
const getId = (array) => {
    // const mappedArray = array.map(item => {
    //     return {
    //         id: item._id.toString(),
    //         ...item
    //     }
    // }).map(({ _id, ...rest }) => rest)
    const mappedArray = array.map(({ id, ...rest }) => id)
    return mappedArray
}
export async function GET() {
    const data = await getAllProducts()
    return NextResponse.json(getId(data))
}