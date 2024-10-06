import Login from "@/components/AuthCompo/Login";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

const page = () => {
    return (
       <div>
        <div className="py-5 px-5">
           <Link href={'/'}> <HomeIcon/> </Link>
        </div>
         <div className="flex flex-col justify-center items-center h-[80vh] w-full">
            <Login/>
        </div>
       </div>
    );
};

export default page;