import Nav from "@/components/Nav.tsx";
import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Nav />
            <main className="pt-16 min-h-screen flex justify-center">
                <div className="max-w-4xl w-full px-4">
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;
