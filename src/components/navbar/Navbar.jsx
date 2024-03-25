import "./navbar.css"
import { MdOutlineTravelExplore } from "react-icons/md";


const Navbar = () =>{
    return(
        <section className="navbar-section">
            <header className="header flex">

                <div className="logo-div">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon"/>BibiTravel</h1>
                    </a>
                </div>

                <div className="navbar">
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                    </ul>
                </div>
            </header>

        </section>
    )
}
export default Navbar;