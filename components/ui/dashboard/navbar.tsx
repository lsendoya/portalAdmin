import React from "react";
import {DropdownProfile} from "@/components/ui/dashboard/profile";



function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <span className="text-xl font-semibold">{"Dalas"}</span>
            <div  className="relative">
                <DropdownProfile/>
            </div>
        </nav>
    );
}

export default Navbar;
