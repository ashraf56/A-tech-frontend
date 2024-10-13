/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { DeleteIcon, Edit2Icon } from "lucide-react";

import Link from "next/link";

const PostManagerCard = ({ p }: any) => {
    return (
        <div>
            <Card className="w-full max-w-xl rounded-none  mx-auto">
                <CardContent className="flex flex-col py-3">
                    <CardTitle className="text-sm ">
                        <Link href={`/post-detail/${p?._id}`}>{p?.title}</Link>
                    </CardTitle>
                    <CardDescription>
                        {p?.user?.name}

                    </CardDescription>

                </CardContent>
                <CardFooter className="justify-end flex gap-3 items-center ">
                    <Edit2Icon className=" w-5 h-5 " />
                    <DeleteIcon className="text-red-500 w-6 h-6 " />
                </CardFooter>
            </Card>
        </div>
    );
};

export default PostManagerCard;