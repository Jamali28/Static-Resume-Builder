import Link from "next/link"

export default function Navbar(){
    return(
        <div className="items-center justify-around">
            <h1 className="flex justify-start  font-serif bg-red-700 ">Navbar</h1>

            <div className="flex items-center justify-center bg-red-700 px-5 space-x-3 ">
                <Link href="/about">About</Link>
                <Link href="/contactus">ContactUs</Link>
                <Link href="/others">Other</Link>
            </div>
        </div>
    )
}