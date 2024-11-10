import Link from "next/link";

export default function NavBar(){
    return(
        <div>
            <ul className="nav">
                <Link className="nav-links" href="/">Home</Link>
                <Link className="nav-links" href="About">About</Link>
                <Link className="nav-links" href="Contact">Contact</Link>
            </ul>
        </div>
    );
}