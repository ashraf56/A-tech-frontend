/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from "next/image";
import lgo from "@/asset/logo.png"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { useGetSingleUserQuery } from "@/redux/feature/auth/authApi";
import { useDeleteAcommentMutation } from "@/redux/feature/Post/Postapi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ViewallComment = ({ c, blogid }: any) => {

    const { data, isLoading } = useGetSingleUserQuery(c.userid)
    const [deleteAcomment] = useDeleteAcommentMutation()
    const router = useRouter()

    if (isLoading) {
        return <span> </span>
    }

    // Delete comment 
    const handleDelete = async (commentid: string) => {
        const deletecomment = {
            id: blogid,
            commentid: {
                _id: commentid
            }
        }
        const toast1 = toast.loading('loading...', { duration: 2000 })
        try {
            const res = await deleteAcomment(deletecomment).unwrap()


            if (res?.success === true) {
                toast.success(res?.message, { id: toast1, duration: 2000 });
                router.refresh()

            }
        } catch (error) {
            console.log(error);

            toast.error('faild', { id: toast1, duration: 2000 });
        }
    }

    return (
        <div>
            <Card className="w-full  rounded-none mx-auto">
                <CardHeader>
                    <div className="flex gap-2 items-center">
                        <div>
                            <Image src={data?.data?.profile || lgo} width={30} height={30} alt="img" ></Image>
                        </div>
                        <div>
                            <h1 className="text-md font-bold">{data?.data?.name}</h1>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>

                    <div>
                        {c?.content}
                    </div>





                    <CardFooter className="justify-end">
                        <Button variant={'ghost'} onClick={() => handleDelete(c._id)}>
                            del
                        </Button>
                    </CardFooter>
                </CardContent>
            </Card>
        </div>
    );
};

export default ViewallComment;