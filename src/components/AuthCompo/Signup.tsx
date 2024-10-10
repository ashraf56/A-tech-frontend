/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Veifytoken } from "@/lib/tokenvarify";
import { useLoginUserMutation, useSignUpUserMutation } from "@/redux/feature/auth/authApi";
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
import { CloudinaryStore } from "@/lib/ClaoudinaryStore";

const Signup = () => {
    const {
        register,
        watch,
        handleSubmit, reset,
        formState: { errors },
    } = useForm()

    const [SignUpUser] = useSignUpUserMutation()
    const navigate = useRouter()
    const onsubmit: SubmitHandler<FieldValues> = async (data) => {
        const file = data.profile[0];
        const profileImage = await CloudinaryStore(file);

        const userData = {
            name: data.name,
            email: data.email,
            role: 'user',
            password: data.password,
            profile: profileImage,
            address: data.address

        }

        const toast1 = toast.loading('loading...', { duration: 2000 })
        try {
            const res = await SignUpUser(userData).unwrap()


            if (res?.success === true) {
                toast.success(res?.message, { id: toast1, duration: 2000 });
                navigate.push('/login')
            }

            reset()

        } catch (error) {
            toast.error('Sign up faild', { id: toast1, duration: 2000 });
        }


    }

    return (

        <Card className="w-full max-w-lg border-none shadow-none ">
            <CardHeader>
                <CardTitle>Sign up now</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="grid w-full items-center gap-4">

                        <div className="flex flex-col space-y-1.5 w-full max-w-full">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" placeholder="your name" {...register('name', {
                                required: true
                            })} />
                            {errors.name && <span className="text-sm text-red-700">
                                {errors.name?.message as string} </span>}
                        </div>
                        <div className="flex flex-col space-y-1.5 w-full max-w-full">
                            <Label htmlFor="name">Email</Label>
                            <Input id="email" type="email" placeholder="your email" {...register('email', {
                                required: true
                            })} />
                            {errors.email && <span className="text-sm text-red-700">
                                {errors.email?.message as string} </span>}
                        </div>


                        <div className="md:flex gap-2 ">
                            <div className="flex flex-col space-y-1.5 mb-2 w-full max-w-full">
                                <Label htmlFor="name">Password</Label>
                                <Input id="password" type="password" placeholder="enter your password" {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    maxLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters'
                                    },
                                })} />
                                {errors.password && <span className="text-sm text-red-700"> {errors.password?.message as string} </span>}
                            </div>
                            <div className="flex flex-col space-y-1.5 w-full max-w-full">
                                <Label htmlFor="name">Confirm Password</Label>
                                <Input id="cp" type="password" placeholder="enter your password"  {...register("cpassword", {
                                    required: true,
                                    validate: (value) =>
                                        value === watch("password") || "The password does not match"
                                })} />
                                {errors.cpassword && <span className="text-sm text-red-700">
                                    {errors.cpassword?.message as string} </span>}
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1.5 w-full max-w-full">
                            <Label htmlFor="name">Profile</Label>
                            <Input type="file" placeholder="insert image" {...register('profile', {
                                required: true
                            })} />
                            {errors.profile && <span className="text-sm text-red-700">
                                {errors.profile?.message as string} </span>}
                        </div>
                        <div className="flex flex-col space-y-1.5 w-full max-w-full">
                            <Label htmlFor="name">Adress</Label>
                            <Input type="text" placeholder="Enter your address" {...register('address', {
                                required: true
                            })} />
                            {errors.address && <span className="text-sm text-red-700">
                                {errors.address?.message as string} </span>}
                        </div>


                        <div className="text-sm">
                            <p>Already have an account? <Link href={'/login'}>Sign in now</Link></p>
                        </div>


                    </div>

                    <CardFooter className="flex justify-center mt-10">
                        <Button type="submit" size={'default'} className="w-full">Sign up </Button>
                    </CardFooter>

                </form>
            </CardContent>

        </Card>

    );
};

export default Signup;