/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import logo from "@/asset/logo.png"
import Image from "next/image"
import Link from "next/link"
import { useAppSelector } from "@/redux/hook"
import { useCurrentUser } from "@/redux/feature/auth/authslice"
import { useGetSingleUserQuery } from "@/redux/feature/auth/authApi"
export function DropMenu() {
    const user: any = useAppSelector(useCurrentUser)
    const { data, isLoading } = useGetSingleUserQuery(user!.id!)
    if (isLoading) {
        return <Image src={logo} width={30} height={30} alt="users" />
    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} size={"default"} className="uppercase" >
                    <Image src={data?.data?.profile || logo} width={30} height={30} alt="users" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup >
                    <DropdownMenuRadioItem value="top">
                        <Link href={'/aboutus'}>Dashboard</Link>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="top">
                        <span>Logout</span>
                    </DropdownMenuRadioItem>

                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
