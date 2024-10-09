/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";

const RecentPostcard = ({rp}:any) => {
    return (
        <div>
            <Card className="w-full max-w-xl rounded-none h-24 mx-auto">
                <CardContent className="flex flex-col py-3">
                    <CardTitle className="text-md ">
                        <Link href={`/post-detail/${rp?._id}`}>{rp?.title}</Link>
                    </CardTitle>
                    <CardDescription>
                       {rp?.user?.name}
                      
                    </CardDescription>
                   
                </CardContent>
            </Card>
        </div>
    );
};

export default RecentPostcard;