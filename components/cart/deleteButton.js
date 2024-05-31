"use client"
import { handleDeleteFromCart } from "@/action";
import deleteIcon from "@/public/icons/delete.svg"
import Image from "next/image";


const DeleteButton = ({ productId, userId }) => {


    const deleteFromCart = async (id) => {
        try {
            const res = await handleDeleteFromCart(id, userId)
            console.log(res);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <button className="text-red-500 hover:text-red-600" onClick={(prouctId) => deleteFromCart(productId)}>
            {/* <Image src={deleteIcon} height={32} width={32} /> */}

            <i className="fa-solid fa-trash-can"></i>

        </button>
    );
};

export default DeleteButton;