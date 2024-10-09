/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { TiArrowUpThick } from "react-icons/ti";
import { FaComment } from "react-icons/fa";
import Link from "next/link";
import moment from 'moment';
import { Badge } from "@/components/ui/badge";
const Postcard = ({data}:{data:any}) => {
    const Datetime = moment(data?.date).format('MMMM Do YYYY')
    return (
        <div>
            <Card className="w-full max-w-3xl rounded-2xl mx-auto">
                <CardHeader>
                    <div className="flex gap-2 items-center">
                        <div>
                            <Image src={data?.user?.profile} width={50} height={50} alt="img" ></Image>
                        </div>
                        <div>
                            <h1 className="text-md font-bold">{data?.user?.name}</h1>
                            <p className="text-sm font-normal">{Datetime}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-3xl py-2">
                        <Link href={`/post-detail/${data._id}`}>{data?.title}</Link>
                    </CardTitle>
                    <p>{data?.subtitle}</p>
                      <div className="pt-3">
                        <Badge variant={'outline'}>#{data?.category?.name}</Badge>
                        <Badge variant={'outline'}>#{data?.blogType}</Badge>
                      </div>
                    <CardDescription className="py-5 h-full ">
                        <Image src={data?.image} width={500} height={500} alt="postimg" className="w-full rounded-lg mx-auto h-52 object-cover " />
                    </CardDescription>
                    <hr />
                    <div className="flex gap-3 items-center mt-5">
                        <div className="flex gap-1 items-center">
                            <TiArrowUpThick className="h-7 w-7 " />
                            <span>{data?.upvote}</span>
                        </div>
                        <div className="flex gap-2 items-center">

                            <FaComment className="h-6 w-6" />
                            <span>{data?.comments?.length}</span>

                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Postcard;