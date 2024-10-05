import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import logo from "@/asset/logo.png"
import img from "@/asset/watch.jpg"
import { ArrowBigUp } from "lucide-react";
import { FaComment } from "react-icons/fa";
import Link from "next/link";

const Postcard = () => {
    return (
        <div>
            <Card className="w-full max-w-3xl rounded-2xl mx-auto">
                <CardHeader>
                    <div className="flex gap-2 items-center">
                        <div>
                            <Image src={logo} width={50} height={50} alt="img" ></Image>
                        </div>
                        <div>
                            <h1 className="text-md font-bold">Your name</h1>
                            <p className="text-sm font-normal">Front end developer</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-3xl py-2">
                        <Link href={'/post-detail'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,</Link>
                    </CardTitle>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit magnam illum ab quibusdam, eligendi autem excepturi expedita totam enim quis.</p>

                    <CardDescription className="py-5 ">
                        <Image src={img} width={500} height={200} alt="postimg" className="w-full rounded-lg mx-auto" />
                    </CardDescription>
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-1 items-center">
                            <ArrowBigUp className="h-7 w-7 " />
                            <span>200</span>
                        </div>
                        <div className="flex gap-2 items-center">

                            <FaComment className="h-6 w-6" />
                            <span>20</span>

                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Postcard;