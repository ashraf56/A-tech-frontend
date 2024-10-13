/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { CiCalendarDate } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { useGetSingleUserQuery } from "@/redux/feature/auth/authApi";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/feature/auth/authslice";
import moment from "moment";
import { useGetMyblogsQuery } from "@/redux/feature/Post/Postapi";
import RecentPostcard from "./homepagecompo/Post/RecentpostCard";

const UsersProfile = () => {

    const user: any = useAppSelector(useCurrentUser)
    const { data } = useGetSingleUserQuery(user?.id)
    const { data: myblogs } = useGetMyblogsQuery(undefined, { pollingInterval: 3000 })
    return (
        <div>
            <div className=" w-full h-screen font-CustomFont overflow-y-scroll">
                <div className='bg-gray-600 w-full h-44 '>

                </div>


                <CardHeader>
                    <Avatar className="w-40 h-40 ml-4 -mt-24">
                        <AvatarImage src={data?.data?.profile} alt="profile" />
                        <AvatarFallback>P</AvatarFallback>
                    </Avatar>

                    <CardTitle className="text-3xl font-bold pt-5 ps-2">{data?.data?.name}</CardTitle>
                    <CardDescription className="flex gap-2 items-center">
                        <CiCalendarDate className="w-5 h-5 " />
                        {moment(data?.data?.createdAt).format('MMMM YYYY')}
                    </CardDescription>
                    <CardDescription className="flex gap-2 items-center"><MdOutlineMailOutline className="w-5 h-5 " />
                        {data?.data?.email}</CardDescription>
                    <CardDescription className="flex gap-2 items-center"><FaRegAddressBook className="w-5 h-5 " /> {data?.data?.address}</CardDescription>
                </CardHeader>
                <CardContent>
                    {  user.role === 'user' && <>
                        <div className="block lg:flex gap-2 justify-center ">
                        <Card className="rounded-none w-96 h-32 md:h-52 text-center items-center flex flex-col justify-center hover:bg-sky-100 transition-all duration-300 ">
                            <div className="flex gap-1 justify-center items-center">
                                <p>Total Post</p>
                            </div>
                            <p className="font-CustomFont text-5xl font-bold  ">{myblogs?.data?.length}</p>
                        </Card>
                        <Card className="rounded-none w-96 h-32 md:h-52 text-center items-center flex flex-col justify-center hover:bg-sky-100 transition-all duration-300 ">
                            <div className="flex gap-1 justify-center items-center">
                                <p>Total Follwers</p>
                            </div>
                            <p className="font-CustomFont text-5xl font-bold  ">0</p>
                        </Card>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl  uppercase py-2">Recent Posts</h1>
                        <div className="grid grid-cols-1 gap-2">
                            {myblogs?.data?.map((b: { _id: any; }) => (
                                <RecentPostcard rp={b} key={b._id} />
                            ))}
                        </div>
                    </div></>
}
                </CardContent>


            </div>

        </div>
    );
};

export default UsersProfile;