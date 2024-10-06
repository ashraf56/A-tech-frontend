/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Veifytoken } from "@/lib/tokenvarify";
import { useLoginUserMutation } from "@/redux/feature/auth/authApi";
import { setUser } from "@/redux/feature/auth/authslice";
import { useAppDispatch } from "@/redux/hook";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Login = () => {
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm()

    const dispatch = useAppDispatch()
    const [loginUser] = useLoginUserMutation()
    const router = useRouter()
    const onsubmit: SubmitHandler<FieldValues> = async (data) => {

        const toast1 = toast.loading('loading...', { duration: 2000 })
        try {
            const res = await loginUser(data).unwrap()
            const user = Veifytoken(res.data.token) as any


            if (res?.success === true) {
                dispatch(setUser({ user: user, token: res.data.token }))
                toast.success(res?.message, { id: toast1, duration: 2000 });
                router.push('/')
            }

            reset()

        } catch (error) {
            toast.error('Log in faild', { id: toast1, duration: 2000 });
        }


    }

    return (

        <Card className="w-full max-w-lg border-none shadow-none ">
            <CardHeader>
                <CardTitle>Log in now</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="grid w-full items-center gap-4">

                        <div className="flex flex-col space-y-1.5 w-full max-w-full">
                            <Label htmlFor="name">Email</Label>
                            <Input id="email" type="email" placeholder="your email" {...register('email', {
                                required: true
                            })} />
                            {errors.email && <span className="text-sm text-red-700">
                                {errors.email?.message as string} </span>}
                        </div>


                        <div className="flex flex-col space-y-1.5 mb-2 w-full max-w-full">
                            <Label >Password</Label>
                            <Input type="password" placeholder="enter your password" {...register('password')} />
                            {errors.password && <span className="text-sm text-red-700"> {errors.password?.message as string} </span>}
                        </div>
                        <div className="text-sm">
                            <p>Dont have any account? <Link href={'/'}>Sign up now</Link></p>
                        </div>


                    </div>

                    <CardFooter className="flex justify-center mt-10">
                        <Button type="submit" size={'default'} className="w-full">Log in </Button>
                    </CardFooter>

                </form>
            </CardContent>

        </Card>

    );
};

export default Login;