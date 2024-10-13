
import Link from "next/link";
import { Button } from "./ui/button";
import logo from '@/asset/logo.png'
import Image from "next/image";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "./ui/sheet";
import { ModeToggle } from "./ThemeCompo";
import { LayoutGridIcon } from "lucide-react";
import NavbarUtills from "./NavbarUtills";

const Navbar = () => {

    return (
        <div>
            <header className="flex h-14 w-full shrink-0 items-center sticky top-0 z-30 px-4 md:px-6 border-b-2">
                <Link href={'/'} className="mr-6 flex">
                    <div className="flex flex-row items-center justify-center gap-2 ">
                        <div><Image src={logo} width={30} height={30} alt="logo" /></div>
                        <p className=" uppercase  tracking-widest">tech</p>
                    </div>

                </Link>


                <nav className="ml-auto hidden lg:flex gap-6  ">


                    <Button variant={'ghost'} size={"default"} className="uppercase" >
                        <Link href={'/contactus'}
                        >
                            Contact
                        </Link>
                    </Button>

                    <Button variant={'ghost'} size={"default"} className="uppercase" >
                        <Link href={'/aboutus'}
                        >
                            About us
                        </Link>
                    </Button>

                    <div className="block">
                        <NavbarUtills />
                    </div>

                    <div className="hidden lg:block">
                        <ModeToggle />
                    </div>




                </nav>




                {/* this code   for mobile and tablet device */}
                <Sheet>
                    <SheetTrigger asChild >
                        <Button variant="outline" className="block lg:hidden ml-auto">
                            <LayoutGridIcon className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetDescription>
                                <nav className="ml-auto flex flex-col gap-6 mt-5">


                                    <Button variant={'ghost'} size={"default"} className="uppercase" >
                                        <Link href={'/contactus'}
                                        >
                                            Contact
                                        </Link>
                                    </Button>

                                    <Button variant={'ghost'} size={"default"} className="uppercase" >
                                        <Link href={'/aboutus'}
                                        >
                                            About us
                                        </Link>
                                    </Button>

                                    <div className="block">
                                        <NavbarUtills />
                                    </div>


                                    <ModeToggle />




                                </nav>

                            </SheetDescription>
                        </SheetHeader>

                    </SheetContent>
                </Sheet>


            </header>
        </div>
    );
};

export default Navbar;