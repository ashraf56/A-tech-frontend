import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";

const RecentPostcard = () => {
    return (
        <div>
            <Card className="w-full max-w-xl rounded-none h-24 mx-auto">
                <CardContent>
                    <CardTitle className="text-md py-2">
                        <Link href={'/post-detail'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,</Link>
                    </CardTitle>
                    <CardDescription>
                       Jhon doe
                      
                    </CardDescription>
                   
                </CardContent>
            </Card>
        </div>
    );
};

export default RecentPostcard;