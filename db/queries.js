import { replaceIDinArray, replaceObjectId } from "@/utils/data-utils";
import { productModel } from "./models/products.model";
import connectMongo from "./connectDb";
import { userModel } from "./models/users.model";
import { orderModel } from "./models/order.model";
import { cartModel } from "./models/cart.model";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";

export async function getAllProducts() {
    await connectMongo()
    const products = await productModel.find().lean()
    return replaceIDinArray(products)
}
export async function getAllProductIds() {
    await connectMongo()
    const products = await productModel.find().select(
        ["category"]).lean()
    const allProducts = replaceIDinArray(products)

    const categoryArray = allProducts.map(product => product.category)
    let uniqueCategory = [...new Set(categoryArray)];
    const idArray = allProducts.map(product => product.id)
    // console.log(idArray);
    console.log(uniqueCategory);
    return { idArray, uniqueCategory }
}

export async function getProductsBySearchAndFilter(searchTerm, category, minPrice, maxPrice, size) {
    await connectMongo()
    let products = []
    let productAmmoutData = []
    if (searchTerm) {
        console.log(searchTerm, "was searched");

        // const destReg = new RegExp(destination, "i")
        const searchReg = new RegExp(searchTerm, "i")

        const allproducts = await productModel.find({
            $or: [
                { name: { $regex: searchReg } },
                { category: { $regex: searchReg } },
                { brand: { $regex: searchReg } }
            ]
        }).select(
            ["name", "gallery", "discountedPrice", "category", "price", "rating", "size", "reviews", "stock"]).lean()

        // console.log(allproducts, "was fetched");
        productAmmoutData = [...allproducts]
        console.log(productAmmoutData.length, "was found");

        products = [...allproducts]

        if (category) {
            const categoryMatch = category.split("|")
            products = products.filter(product => {
                const productCategory = product.category.toLowerCase()
                return categoryMatch.includes(productCategory)
            })
            // console.log(replaceIDinArray(newProducts));
            // return {
            //     data: replaceIDinArray(products),
            //     ammount: productAmmoutData
            // }
        }
        if (minPrice && maxPrice) {
            products = products.filter(product => {
                return product.discountedPrice > parseInt(minPrice) && product.discountedPrice < Number(maxPrice)

            })

        }
        if (size) {
            products = products.filter(product => product.size === size)
        }
        return {
            data: replaceIDinArray(products),
            ammount: replaceIDinArray(productAmmoutData)
        }
        // if (maxPrice) {
        //     products = products.filter(product => product.discountedPrice < parseInt(maxPrice))

        // }


        // if (category) {
        //     // console.log("categoryGiven", category);
        //     const categoryMatch = category.split("|")
        //     // console.log(categoryMa);
        //     products = products.filter(product => {
        //         const productCategory = product.category.toLowerCase()
        //         return categoryMatch.includes(productCategory)
        //     })

        // }
    }
    else {
        const allproducts = await productModel.find().select(
            ["name", "gallery", "discountedPrice", "price", "rating", "category", "size", "reviews", "stock"]).lean()
        productAmmoutData = [...allproducts]
        products = [...allproducts]
        // console.log();
        // console.log(productAmmoutData);
        if (category) {
            // console.log(category is "");
            const categoryMatch = category.split("|")
            products = products.filter(product => {
                const productCategory = product.category.toLowerCase()
                return categoryMatch.includes(productCategory)
            })
            // console.log(replaceIDinArray(newProducts), "new product");
            // return {
            //     data: replaceIDinArray(products),
            //     ammount: productAmmoutData
            // }
        }
        if (minPrice && maxPrice) {
            products = products.filter(product => {
                return product.discountedPrice > parseInt(minPrice) && product.discountedPrice < parseInt(maxPrice)

            })


            // if (minPrice) {
            //     products = products.filter(product => product.discountedPrice > parseInt(minPrice))

            // }
            // if (maxPrice) {
            //     products = products.filter(product => product.discountedPrice > parseInt(maxPrice))

            // }
        }
        if (size) {
            // products = products.filter(product => product.size === size)
            // console.log(size);
            products = products.filter(product => product.size === size)
            // let sizeArray = products.map(product=> console.log(product.siz);) 
            // console.log(pro);
            // let sizeMatched = products.filter(product => product.size === size)
            // console.log(sizeMatched);
        }


        if (products.length) {
            return {
                data: replaceIDinArray(products),
                ammount: replaceIDinArray(productAmmoutData)
            }
        }
    }
}

// export async function getProductsBySearchAndFilter(searchTerm, category, minPrice, maxPrice, size) {
//     await connectMongo()
//     let products = []
//     let productAmmoutData = []
//     let query 
//     if (searchTerm) {
//         const searchReg = new RegExp(searchTerm, "i")
//         query = {
//             $or: [
//                 { name: { $regex: searchReg } },
//                 { category: { $regex: searchReg } },
//                 { brand: { $regex: searchReg } }
//             ]
//         }
//     }
//     // const destReg = new RegExp(destination, "i")


//     const allproducts = await productModel.find(query).select(
//         ["name", "gallery", "discountedPrice", "category", "price", "rating", "reviews"]).lean()
//     productAmmoutData = [...allproducts]
//     products = [...allproducts]

//     if (category) {
//         const categoryMatch = category.split("|")
//         products = products.filter(product => {
//             const productCategory = product.category.toLowerCase()
//             return categoryMatch.includes(productCategory)
//         })

//     }
//     if (minPrice && maxPrice) {
//         products = products.filter(product => {
//             return product.discountedPrice > parseInt(minPrice) && product.discountedPrice < Number(maxPrice)

//         })

//     }
//     if (size) {
//         // const categoryMatch = category.split("|")
//         // products = products.filter(product => {
//         //     const productCategory = product.category.toLowerCase()
//         //     return categoryMatch.includes(productCategory)
//         // })
//         const sizeToMatch = size.split("|")
//         products = products.filter(product => {
//             const productSize = product.size.toLowerCase()
//             return sizeToMatch.includes(productSize)
//         })
//     }



//     // else {
//     //     const allproducts = await productModel.find().select(
//     //         ["name", "gallery", "discountedPrice", "price", "rating", "category", "reviews"]).lean()
//     //     productAmmoutData = [...products]
//     //     products = [...allproducts]
//     //     if (category) {
//     //         // console.log(category is "");
//     //         const categoryMatch = category.split("|")
//     //         products = products.filter(product => {
//     //             const productCategory = product.category.toLowerCase()
//     //             return categoryMatch.includes(productCategory)
//     //         })

//     //     }
//     //     if (minPrice && maxPrice) {
//     //         products = products.filter(product => {
//     //             return product.discountedPrice > parseInt(minPrice) && product.discountedPrice < parseInt(maxPrice)

//     //         })

//     //     }


//     //     if (products.length) {
//     //         return {
//     //             data: replaceIDinArray(products),
//     //             ammount: replaceIDinArray(productAmmoutData)
//     //         }
//     //     }
//     // }
// }

export async function getAProduct(id) {
    await connectMongo()
    try {
        // console.log(id);
        const product = await productModel.findById(id).lean()
        if (product) {
            return replaceObjectId(product)
        } else {
            return null
        }


    } catch (error) {
        console.log("error in getting product", error.message);
        return null
    }

}
export async function getNewArrivals() {
    await connectMongo()
    const products = await productModel.find().sort({ createdAt: 1 }).limit(4).select(
        ["name", "gallery", "discountedPrice", "price", "rating", "reviews", "stock"]
    ).lean()
    return replaceIDinArray(products)

}
export async function getTrendingProducts() {
    await connectMongo()

    const products = await productModel.find().sort({ updatedAt: -1 }).limit(4).select(
        ["name", "gallery", "discountedPrice", "price", "rating", "reviews", "stock"]
    ).lean()
    return replaceIDinArray(products)

}

export async function getUserInfo(userEmail) {
    await connectMongo()
    const user = await userModel.findOne({ email: userEmail }).lean()
    if (user) {
        return replaceObjectId(user)
    }
}

export async function getUsersOrder(id) {
    await connectMongo()
    const orders = await orderModel.find({ userId: id.toString() })
    return replaceIDinArray(orders)
}
export async function getUsersCartInfo(id) {
    await connectMongo()

    const carts = await cartModel.find({ userId: id, status: 'pending' }).lean()
    if (carts.length) {
        return replaceIDinArray(carts)
    } else { return [] }

}

export async function createUser(info) {
    await connectMongo()
    return userModel.create(info)
}


export async function getProductsByCategory(name) {
    await connectMongo()
    const products = await productModel.find(
        { category: { $regex: new RegExp(name, "i") } }
    ).select(["name", "gallery", "discountedPrice", "price", "rating", "reviews", "stock"]).lean()
    if (products.length) {
        return replaceIDinArray(products)
    } else {
        return []
    }
}

export async function createCart(data) {
    const { productId, quantity, userId, status } = data
    // console.log(data, "was given ");

    try {
        await connectMongo()
        const res = await cartModel.create(data)
        console.log(res, "res");

        if (res) {
            const update = await productModel.findByIdAndUpdate(
                productId,
                { $inc: { stock: -quantity } }
            )
            if (update) {
                console.log(update, "updated product");

                revalidatePath("/")
                return "added"
            }
        }



    } catch (error) {
        console.log("error in adding to cart ", error)
        throw new Error("failed to add to cart ")
    }

}

export async function getCartProducts(productIds) {
    const cartProducts = await productModel.find({
        _id: { $in: productIds }
    }).lean()
    if (cartProducts.length) {
        return replaceIDinArray(cartProducts)
    }
    else {
        return []
    }
}

export async function updateWishList(productId, userId) {
    await connectMongo()
    // console.log(recipeId, userId);
    try {
        const user = await userModel.findById(userId)
        if (user) {
            if (!user.wishList) {
                // If not, create the wishlist property as an empty array
                user.wishList = [];
            }
            const foundProduct = await user?.wishList.find(id => id.toString() === productId)
            if (foundProduct) {
                await user.wishList.pull(productId)
            }
            else {
                await user.wishList.push(productId)

            }
            user.save()
        }
        return "updated"
    } catch (error) {
        return "failed"
    }
}
// export async function updateCartInfoToPaid(productIds){
// await connectMongo()
// const cartProducts = await cartModel.find({
//     productId: {$in: productIds}
// })
// if(cartProducts){
//     await 
// }
// }

export async function placeOrder(info) {

    try {
        console.log(info);
        await connectMongo()
        const userId = info?.userId;
        const res = await orderModel.create(info)
        if (res) {
            const updateCate = await updateCartStatus(userId, info.productIds)
            const result = res.toObject();
            return replaceObjectId(result)
            // console.log(result);
            // console.log();
            // console.log(newRes, "in placeOrder")
            // return ("sucess");

            // return replaceObjectId(res)
        }



    } catch (error) {
        console.log(error.message);
        throw new Error(error)
    }
}
export async function updateCartStatus(userId, productIds) {
    try {
        const res = await cartModel.updateMany(
            {
                userId: userId,
                productId: { $in: productIds }
            },
            {
                $set: { status: 'paid' }
            }
            // { userId: userId, productIds: { $all: productIds } },
            // { $set: { status: 'paid' } }
        );
        console.log('Cart statuses updated to paid');
        return res
    } catch (err) {
        console.error('Error updating cart statuses', err);
        return err
    }
};

export async function updateUserAddress(userId, updates) {
    await connectMongo()
    console.log("id", userId);
    console.log("updates", updates);
    // const updateInfo = {
    //     [propertyName]: info
    // }
    try {
        const res = await userModel.findByIdAndUpdate(userId, updates, { new: true })
        if (res) {
            console.log(res, "after update in query");
            return res
        }

    } catch (error) {
        console.log("update Error", error.message);
        return "failed "
    }

}



export async function getOrder(orderId) {
    await connectMongo()
    try {
        const order = await orderModel.findById(orderId).lean()
        if (order) {
            return replaceObjectId(order)
        }
        else {
            return null
        }
    } catch (error) {
        console.log("gettingOrder issue", error.message);
        return null
    }
}

export async function deleteCartItems(productId, userId,) {


    try {
        await connectMongo()
        const filter = {
            productId: productId,
            userId: userId,
            status: "pending"
        }
        const res = await cartModel.deleteMany(filter)
        if (res) {
            return "deleted"
        }
    } catch (error) {
        console.log("error in deletation", error.message);
        throw new Error(error)
    }
}
export async function getWishListProducts(productIdArray) {
    const objectIds = productIdArray.map(id => new mongoose.Types.ObjectId(id))
    try {
        await connectMongo()
        const res = await productModel.find({ _id: { $in: objectIds } }).lean()
        return replaceIDinArray(res)
    } catch (error) {
        console.log(error)
        return "failed";
    }
}