'use client'

import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

const SearchFeild = () => {
    const {
        register,
        handleSubmit,
      } = useForm()

      const onSubmit:SubmitHandler<FieldValues> = async (data)=>{
console.log(data);

      }
    return (
        <div className="w-full max-w-2xl  mx-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
           <div className="flex justify-center items-center">
           <Input type="text" placeholder="Search" {...register('search')} className="h-12"/>
            <Button variant={'ghost'} className="-ml-12"><SearchIcon className=" w-5 " /></Button>
           </div>
            </form>    
        </div>
    );
};

export default SearchFeild;