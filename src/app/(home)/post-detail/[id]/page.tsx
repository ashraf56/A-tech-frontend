/* eslint-disable @typescript-eslint/no-explicit-any */
import PostDetail from "@/components/PostDetail";
import getSingleBlog from "@/Service/getSingleBlog";
import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const page = async ({ params }:{params:any}) => {
    const {id}= params 
   
    const data = await getSingleBlog(id)
    
    return (
        <div className="mx-auto">
            <div className="py-5 px-5">
           <Link href={'/'}> <HomeIcon className="w-5 h-5"/> </Link>
        </div>
           <PostDetail data={data?.data}/>
        </div>
    );
};

export default page;