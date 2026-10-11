import Link from "next/link";

export default function Navbar(){
    return(
        <div className="mx-3 p-3 flex justify-between items-center">
            <h1 className="text-4xl text-black">Navbar</h1>
            <div>
                <Link href="../" className="me-3">accueil</Link>
                <Link className="me-3" href="../about">a props</Link>
                <Link className="me-3" href="../contact">contact</Link>
                <Link className="me-3" href="../services">services</Link>
            </div>
        </div>
    )
}