import "./home.css"
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { IoListOutline } from "react-icons/io5";
import { TbApps } from "react-icons/tb";


const Home = () =>{
    return(
       <section className="home">
            <div className="overlay"></div>
            <video src="src/assets/video4.mp4" muted autoPlay loop></video>
            <div className="homeContent contener">
                <div className="textDiv">
                    <span className="smallText">
                        Nos offres
                    </span>
                    <h1 className="homeTitle">Recherchez vos vacances</h1>

                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Recherchez votre destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Entrer le nom ici....."/>
                            <GrLocation className="icons"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Sélectionnez votre date:</label>
                        <div className="input flex">
                            <input type="date"/>
                           
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label-total flex">
                        <label htmlFor="price">Prix maximum:</label>
                        <h3 className="total">$5000</h3>

                        </div>
                        
                        <div className="input flex">
                            <input type="range" max="5000" min="1000"/>
            
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className="icons"/>
                        <span>Plus de filtres</span>

                    </div>

                </div>

              <div className="homeFooterIcons flex">
                <div className="rightIcons">
                    <FaFacebookF className="icon"/>
                    <FaInstagram  className="icon"/>
                    <FaTripadvisor className="icon"/>
                </div>
                <div className="leftIcons">
                    <IoListOutline  className="icon"/>
                    <TbApps   className="icon"/>
                </div>

              </div>

            </div>
            

        </section>
    )
}   
export default Home;