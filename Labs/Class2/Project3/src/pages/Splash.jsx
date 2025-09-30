import gruelHome from "../assets/images/gruelHome.png";
import barHappy from "../assets/images/barHappy.png";

export default function Splash() {
    return (
        <>
            <div className="banner">
                <img src={gruelHome} alt="gruel" />
                <div className="banner-text">
                    Pak's Pub
                    <p>You'll be asking for one more bowl</p>
                </div>
            </div>
            <h1 id="index-Text">The best place to eat and drink</h1>
            <hr id="index-hr" />
            <div className="container-fluid my-4">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center mb-3 mb-md-0">
                        <img src={barHappy} alt="people happy at bar" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h1>Customer Reviews</h1>
                        <p>"The best food I've had in years" - Jeff</p>
                        <p>"Such a cool place!" - Maddie</p>
                        <p>"Great service!" - Tom</p>
                    </div>
                </div>
            </div>
        </>
    );
}