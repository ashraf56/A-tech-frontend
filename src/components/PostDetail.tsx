/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "@/asset/logo.png"
import Image from "next/image";
import { BiUpvote } from "react-icons/bi";
import AddComents from "./Comment/AddComents";
import { Separator } from "./ui/separator";
import ViewallComment from "./Comment/ViewallComment";
import moment from "moment";
import { Button } from "./ui/button";
const PostDetail = async ({ data }: any) => {
    

    return (
        <div className="w-full max-w-3xl container mx-auto">
            <div className="w-full h-full py-2">
                <Image src={data?.image} width={400} height={400} alt="blogs" className="w-full "></Image>
            </div>

            <div className="flex gap-2 items-center py-3">
                <div className="rounded-full">
                    <Image src={data?.user?.profile || logo} width={50} height={50} alt="img" className="rounded-full" ></Image>
                </div>
                <div >
                    <div className="flex gap-3 items-center">  <h1 className="text-md font-bold">{data?.user?.name} . </h1>

                        <p className="text-green-400 text-sm">follow</p>
                    </div>
                    <p className="text-sm font-normal">{data?.user?.role === 'user' && 'Author'}</p>

                </div>

            </div>

            <h1 className="text-3xl font-bold">{data.title}</h1>
            <div className="py-1">
                <p className="text-sm font-bold text-gray-400"> {moment(data.date).format('MMMM Do YYYY')}</p>
            </div>

            <div className="">
                <div dangerouslySetInnerHTML={{ __html: data?.description }} />
            </div>
            <Separator className="my-4" />
            <div className="flex gap-3 items-center justify-between py-3 h-24 ">
                <div className="flex items-center gap-1 ">

                    <Button variant={'ghost'} size={'sm'}> <BiUpvote className="w-6 h-6 " />  </Button>
                    <p className="text-xl">{data?.upvote}</p>

                </div>
                <div className="flex gap-2 items-center">

                    <h1 className="font-bold">Top comments</h1>
                    <span>{data?.comments?.length}</span>

                </div>

            </div>
            <Separator className="my-4" />

            <div>
                <AddComents blog={data} />
            </div>

            <div>
                <h1 className="font-bold pb-2">All comments</h1>
                <div className=" grid grid-cols-1 gap-3 ">
                    {data?.comments?.reverse().map((c:any) => (
                        // eslint-disable-next-line react/jsx-key
                        <ViewallComment c={c} key={c._id} blogid={data._id}/>
                    ))

                    }
                </div>
            </div>

        </div>
    );
};

export default PostDetail;