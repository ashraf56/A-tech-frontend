import Image from "next/image";
import lgo from "@/asset/logo.png"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

const ViewallComment = async() => {
    return (
        <div>
            <Card className="w-full  rounded-none mx-auto">
                <CardHeader>
                    <div className="flex gap-2 items-center">
                        <div>
                            <Image src={lgo} width={50} height={50} alt="img" ></Image>
                        </div>
                        <div>
                            <h1 className="text-md font-bold">Your name</h1>
                        </div>
                    </div>

                    <CardContent>

                        <CardDescription>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat reprehenderit quam vero. Labore id inventore facere sed tempora aut enim.

                        </CardDescription>

                    </CardContent>
                    <CardFooter>
                        <Button variant={'default'}>Delete</Button>
                    </CardFooter>
                </CardHeader>
            </Card>
        </div>
    );
};

export default ViewallComment;