'use client'

import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

const SearchFeild = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit:SubmitHandler<FieldValues> = async (data)=>{
console.log(data);

      }
    return (
        <div className="w-full max-w-2xl  mx-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
           <div className="flex justify-center items-center">
           <Input type="text" placeholder="Search" {...register('search')}/>
            <SearchIcon className="-ml-12 w-5 " />
           </div>
            </form>    
        </div>
    );
};

export default SearchFeild;