import { Link } from "react-router-dom";
import Cart from "@/components/Cart.tsx";
import {useAuth} from "@/context/AuthContext.tsx";
import {Button} from "@/components/ui/button.tsx";

const Nav = () => {
    const {user, logOut} = useAuth();
    return (
        <nav className="fixed top-0 left-0 w-full bg-ring text-primary-foreground shadow-md z-50 backdrop-blur-md">
            <div className="flex items-center px-8 py-3">

                <Link to="/" className="font-bold text-lg">
                   <img alt="home" src={"/images/logo.png"} height={"50"} width={"50"}/>
                </Link>
                <Link to={"Widgets"} className={"font-bold text-lg px-10"}>
                    Browse
                </Link>
                <Cart/>
                {!user && <Link to={"Login"} className={"font-bold text-lg px-10"}>
                    Employee Log In
                </Link>}
                {!user && <Link to={"SignUp"} className={"font-bold text-lg px-10"}>
                    Employee Sign Up
                </Link>}
                {user && <Button onClick={logOut} className={"px-8"}>Log Out</Button>}
                {user && <Link to={"AddWidget"} className={"font-bold text-lg px-10"}>
                    Add Widget</Link>}

                <div className="flex space-x-4">

                </div>
            </div>
        </nav>
    );
};

export default Nav;
