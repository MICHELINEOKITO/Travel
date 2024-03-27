import "./home.css"


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

            </div>
            

        </section>
    )
}
export default Home;