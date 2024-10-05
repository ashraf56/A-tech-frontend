"use client"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const AddCooments = () => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);

    }
    return (

        <div className="w-full max-w-2xl  mx-auto ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <Textarea placeholder="Search" {...register('addcomment')} className="h-12" />
                    <Button variant={'default'} type="submit"> Add comment</Button>
                </div>
            </form>
        </div>

    );
};

export default AddCooments;