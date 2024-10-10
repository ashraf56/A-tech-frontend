/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useMakeAcommentMutation } from "@/redux/feature/Post/Postapi";
import { toast } from "sonner";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/feature/auth/authslice";
import { useRouter } from "next/navigation";

const AddComents = ({ blog }: any) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const user: any = useAppSelector(useCurrentUser)
    const router = useRouter()
    const [makeAcomment] = useMakeAcommentMutation()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const commentData = {
            id: blog._id,
            info:
            {
                userid: user?.id,
                content: data.content
            }


        }



        const toast1 = toast.loading('loading...', { duration: 2000 })
        try {
            const res = await makeAcomment(commentData).unwrap()


            if (res?.success === true) {
                toast.success(res?.message, { id: toast1, duration: 2000 });
                router.refresh()
                reset()
            }




        } catch (error) {
            console.log(error);

            toast.error('faild', { id: toast1, duration: 2000 });
        }
    }
    return (

        <div className="w-full max-w-2xl  mx-auto ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <Textarea placeholder="write something" {...register('content')} className="h-12" />
                    <Button variant={'default'} type="submit"> Add comment</Button>
                </div>
            </form>
        </div>

    );
};

export default AddComents;