/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const A_Input = ({ name, type, placeholder, label }: any) => {
    const { register, formState: { errors } } = useFormContext()

    return (


        <div className="flex flex-col space-y-1.5 w-full max-w-full ">
            <Label htmlFor="name">{label}</Label>
            <Input
                {...register(name, { required: { value: true, message: 'this feild is required' } })}
                placeholder={placeholder}
                type={type}
                className="col-span-3"
            />
            {errors.name && <span className="text-sm text-red-700">
                {errors.name?.message as string} </span>}
        </div>



    );
};

export default A_Input;