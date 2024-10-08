/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";

const A_ApiSelect = ({ label, name, data }: any) => {
    const { register } = useFormContext()
    return (
        <div className="flex flex-col space-y-1.5 w-full max-w-full ">
            <Label >
                {label}
            </Label>
            <select {...register(name)} className="col-span-3 px-3 text-sm py-2 rounded-md border border-neutral-200 bg-transparent file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline dark:file:text-neutral-5   ">

                {
                    data?.map((d: any) => (
                        <option className="bg-transparent dark:text-black" key={d?._id} value={d?._id} >{d?.name}</option>
                    ))
                }

            </select>

        </div>
    );
};

export default A_ApiSelect;