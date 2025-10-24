import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-ring text-primary-foreground shadow-md z-50 backdrop-blur-md">
            <div className="flex justify-between items-center px-8 py-3">

                <Link to="/" className="font-bold text-lg">
                   <img alt="home" src={"/images/logo.png"} height={"50"} width={"50"}/>
                </Link>


                <div className="flex space-x-4">

                </div>
            </div>
        </nav>
    );
};

export default Nav;
