'use client'
import Image from "next/image";
import lgo from "@/asset/logo.png"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { useGetSingleUserQuery } from "@/redux/feature/auth/authApi";

const ViewallComment = ({c}) => {
    console.log(c);
     const {data,isLoading}= useGetSingleUserQuery(c.userid)
     if (isLoading) {
        return <span> </span>
     }
    return (
        <div>
            <Card className="w-full  rounded-none mx-auto">
                <CardHeader>
                    <div className="flex gap-2 items-center">
                        <div>
                            <Image src={data?.data?.profile||lgo} width={30} height={30} alt="img" ></Image>
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
                        <Button variant={'ghost'}>
                           del
                        </Button>
                    </CardFooter>
                </CardContent>
            </Card>
        </div>
    );
};

export default ViewallComment;