import Image from 'next/image'
import Link from 'next/link'
import cross from "@/public/close.svg"

export default function NotFound() {
    return (
        <div className="text-3xl  flex justify-center items-center">
            <div className="py-8 h-[70vh] px-8 flex flex-col gap-4 justify-center items-center rounded-md border-4 border-red-500">
                <Image src={cross} alt="404 Not found" height={100} width={100} />
                <h1 className="text-3xl text-red-600">
                    This requested page was not found!
                </h1>
                <Link href="/" className='hover:text-blue-700 underline'>Return Home</Link>
            </div>
        </div>
    )
}