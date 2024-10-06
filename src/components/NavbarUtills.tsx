'use client'
import {  useAppDispatch, useAppSelector } from "@/redux/hook";
import { CreatePost } from "./homepagecompo/Post/CreatePost";
import { DropMenu } from "./DropdownMenu/DropMenu";
import { Button } from "./ui/button";
import Link from "next/link";
import { useCurrentToken } from "@/redux/feature/auth/authslice";

const NavbarUtills = () => {
    const user = useAppSelector(useCurrentToken)
    const dispatch = useAppDispatch()
    return (
        <div>
             <nav>
                
                   
           { user ? <div className=" lg:flex gap-2">
            <CreatePost/>
            <DropMenu dispatch={dispatch}/>
           </div>:
            <Button variant={'ghost'} size={"default"} className="uppercase" >
            <Link href={'/login'}
            >
                Login
            </Link>
        </Button>
           }


                </nav>   
        </div>
    );
};

export default NavbarUtills;