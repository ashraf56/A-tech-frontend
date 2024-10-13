/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/feature/auth/authslice";
import img from '@/asset/logo.png'
import Image from "next/image";
import { adminroute, userRoute } from "@/lib/sidebarRoutes";
import { FaRandom } from "react-icons/fa";




const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const user: any = useAppSelector(useCurrentUser)
    return (

        <div className={` h-[100vh]     p-5 border-r-2    ${open ? 'w-20 lg:w-60' : 'w-20 '} relative duration-300`}>



            <div className={` gap-2 items-center justify-center flex flex-col`}>
              <div onClick={() => setOpen(!open)}>
              <Image src={img} width={100} height={100} alt="profile"  />
              </div>
                <div onClick={() => setOpen(!open)} className={`${!open && 'lg:hidden'} hidden lg:block`}><h1 className={` font-CustomFont font-extrabold `}>Tech</h1></div>
            </div>


            <ul className=' flex flex-col pt-20 '>
                {
                    user?.role === 'admin' ?

                        adminroute.map(r => (
                            <li key={r.name} className=' flex gap-2   items-center hover:bg-slate-300  p-2 mt-2 rounded-md text-sm '>
                                <Link href={`${r.value}`} className=' flex gap-2 items-center '>
                                    <span className="w-6"
                                    >
  <FaRandom className="w-6 h-6 "/>
                                    </span>
                                    <span className={`${!open && 'lg:hidden'} hidden lg:block  text-sm`}> {r.name}</span>
                                </Link>
                            </li>
                        ))

                        :
                        userRoute.map(r => (
                            <li key={r.name} className=' flex gap-2   items-center hover:bg-slate-300  p-2 mt-2 rounded-md text-sm '>
                                <Link href={`${r.value}`} className=' flex gap-2 items-center '>
                                    <span className="w-6"
                                    >
                                        <FaRandom className="w-6 h-6 "/>
                                    </span>
                                    <span className={`${!open && 'lg:hidden'} hidden lg:block  text-sm`}> {r.name}</span>
                                </Link>
                            </li>
                        ))

                }

                <li className=' flex gap-2 font-CustomFont  items-center  p-2 mt-2 rounded-md hover:bg-slate-300 text-sm'>
                    <Link href={'/'} className=' flex gap-2 items-center '>
                        <span className="w-6"
                        >
                            <HomeIcon className="w-6 h-6 " />
                        </span>
                        <span className={`${!open && 'lg:hidden'} hidden lg:block px-2 text-sm`}> Back to Home</span>
                    </Link>
                </li>

            </ul>


        </div>

    );
};

export default Sidebar;