import { Link } from "react-router-dom";
import Cart from "@/components/Cart.tsx";
import {useAuth} from "@/context/AuthContext.tsx";
import {Button} from "@/components/ui/button.tsx";

const Nav = () => {
    const {user, logOut} = useAuth();
    return (
        <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50 backdrop-blur-md">
            <div className="flex items-center px-8 py-3">

                <Link to="/" className="font-bold text-lg px-3">
                   <img alt="home" className={"bg-white"} src={"/images/logo.png"} height={"50"} width={"50"}/>
                </Link>
                <Link to={"Widgets"} className={"font-bold text-lg px-3"}>
                    Browse
                </Link>
                <div className={"px-3"}>
                    <Cart/>
                </div>
                <div>
                {!user && <Link to={"Login"} className={"font-bold text-lg px-3"}>
                    Employee Log In
                </Link>}
                {!user && <Link to={"SignUp"} className={"font-bold text-lg px-3"}>
                    Employee Sign Up
                </Link>}
                    {user && <Link to={"AddWidget"} className={"font-bold text-lg px-3"}>
                        Add Widget</Link>}
                    {user && <Button variant={"link"} onClick={logOut} className={"px-3 text-white"}>Log Out</Button>}
                </div>

                <div className="flex space-x-4">

                </div>
            </div>
        </nav>
    );
};

export default Nav;
