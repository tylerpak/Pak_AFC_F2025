import bartenderImg from "../assets/images/bartender.png";
import HiringForm from "../components/HiringForm.jsx";

function Hiring() {
    return (
        <div className="container my-4">
            <h1 className="text-center">Want to work with us?</h1>
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img src={bartenderImg} alt="bartender" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <HiringForm />
                </div>
            </div>
        </div>
    );
}

export default Hiring;