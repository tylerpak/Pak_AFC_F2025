import Nav from "@/components/Nav.tsx";
import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Nav />
            <main className="pt-16 min-h-screen w-full">
                {children}
            </main>
        </>
    );
};

export default Layout;
