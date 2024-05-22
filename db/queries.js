import { replaceIDinArray, replaceObjectId } from "@/utils/data-utils";
import { productModel } from "./models/products.model";
import connectMongo from "./connectDb";

export async function getAllProducts() {
    await connectMongo()
    const products = await productModel.find().lean()
    return replaceIDinArray(products)
}

export async function getAProduct(id) {
    await connectMongo()
    try {
        console.log(id);
        const product = await productModel.findById(id).lean()
        return replaceObjectId(product)


    } catch (error) {
        return {}
    }

}
export async function getNewArrivals() {
    await connectMongo()
    const products = await productModel.find().sort({ updatedAt: -1 }).limit(4).select(
        ["name", "gallery", "discountedPrice", "price"]
    ).lean()
    return replaceIDinArray(products)

}
export async function getTrendingProducts() {
    await connectMongo()

    const products = await productModel.find().sort({ updatedAt: -1 }).limit(4).select(
        ["name", "gallery", "discountedPrice", "price"]
    ).lean()
    return replaceIDinArray(products)

}