
"use client"

import * as React from "react"
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export function DropdownProfile() {

    const router = useRouter();

    const handleLogout = async () => {
        router.push('/');
    };


    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild >
                <Button variant="ghost" className="text-white bg-transparent hover:bg-neutral-200 hover:text-gray-900 ">Dora</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-20  shadow-lg rounded-lg py-1 ">
                <DropdownMenuItem
                    className=" py-2 text-gray-700 cursor-pointer text-center font-semibold   "
                    onClick={handleLogout}
                >
                    log off
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
