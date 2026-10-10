export default function Navbar(){
    return(
        <div className="mx-3 p-3 flex justify-between items-center">
            <h1 className="text-4xl text-black">Navbar</h1>
            <div>
                <a className="me-3" href="">accueil</a>
                <a className="me-3" href="">a props</a>
                <a className="me-3" href="">contact</a>
            </div>
        </div>
    )
}