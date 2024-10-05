import imgs from "@/asset/watch.jpg"
import logo from "@/asset/logo.png"
import Image from "next/image";
import { BiUpvote } from "react-icons/bi";
import AddCooments from "./Comment/AddCooments";
import { Separator } from "./ui/separator";
import ViewallComment from "./Comment/ViewallComment";
const PostDetail = () => {
    return (
        <div className="w-full max-w-3xl container mx-auto">
            <div className="w-full h-full py-2">
                <Image src={imgs} width={400} height={400} alt="blogs" className="w-full "></Image>
            </div>

            <div className="flex gap-2 items-center py-3">
                <div className="rounded-full">
                    <Image src={logo} width={50} height={50} alt="img" className="rounded-full" ></Image>
                </div>
                <div >
                    <div className="flex gap-3 items-center">  <h1 className="text-md font-bold">Your name . </h1>

                        <p className="text-green-400 text-sm">follow</p>
                    </div>
                    <p className="text-sm font-normal">Front end developer</p>

                </div>

            </div>

            <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, maxime?</h1>
            <div className="py-1">
                <p className="text-sm font-bold text-gray-400"> 21 June 2024</p>
            </div>

            <div className="">
                Node.js is known as a blazingly fast server platform with its revolutionary single-thread architecture, utilizing server resources more efficiently. But is it actually possible to achieve that amazing performance using only one thread? The answer might surprise you.


                In this article we will reveal all the secrets and magic behind Node.js in a very simple manner.

                Process vs Thread ⚙️
                Before we begin, we have to understand what a process and a thread are, and discover their differences and similarities.

                A process is an instance of a program that is currently being executed. Each process runs independently of others. Processes have several substantial resources:

                Execution code;
                Data Segment — contains global and static variables that needs to be accessible from any part of the program;
                Heap — dynamic memory allocation;
                Stack — local variables, function arguments and function calls;
                Registers — small, fast storage locations directly within CPU used to hold data temporarily during execution of programs (like program pointer and stack pointer).
                A thread is a single unit of execution within a process. There might be multiple threads within the process performing different operations simultaneously. The process share execution code, data and heap with threads, but stack and registers are allocated separately for each thread.


                JavaScript is Not Threaded ⚠️
                To avoid misunderstanding of terms, it’s important to note that JavaScript itself is neither single-threaded nor multi-threaded. The language has nothing to do with threading. It’s just a set of instructions for the execution platform to handle. The platform handle these instructions in its own way — whether in a single-threaded or multi-threaded manner.

                I/O operations 🧮
                (Or Input / Output operations) are generally considered to be slower compared to other computer operations. Here are some examples:

                write data to the disk;
                read data from the disk;
                wait for user input (like mouse click);
                send HTTP request;
                performing a database operation.
                I/O’s are Slow 🐢
                You might be wondering why reading data from disk is considered slow? The answer lies in the physical implementation of hardware components.

                Accessing the RAM is in the order of nanoseconds, while accessing data on the disk or the network is in the order of milliseconds.

                The same applies to the bandwidth. RAM has a transfer rate consistently in the order of GB/s, while the disk or network varies from MB/s to optimistically GB/s.

                On top of that, we have to consider the human factor. In many circumstances, the input of an application comes from a real person (like, a key press). So the speed and frequency of I/O doesn’t only depend on technical aspects.

                I/O’s Block the Thread 🚧
                I/O’s can significantly slow down a program. The thread remains blocked, and no further operations will be executed until the I/O is completed.


                Create More Threads!
                Okay, why not just spawn more threads inside the program and handle each request separately? Well, it seems like a good idea. Now, each client request has its own thread, and the server can handle multiple requests simultaneously.


            </div>
            <Separator className="my-4" />
            <div className="flex gap-3 items-center justify-start py-3 h-24 ">
                <div className="flex items-center gap-3">

                    <BiUpvote className="w-6 h-6 " />     <span>200</span>

                </div>
                <div className="flex gap-1 items-center">

                    <h1 className="font-bold">Top comments</h1>
                    <span>20</span>

                </div>

            </div>
            <Separator className="my-4" />

            <div>
                <AddCooments />
            </div>

            <div>
                <h1 className="font-bold pb-2">All comments</h1>
                <div className=" grid grid-cols-1 gap-3 ">
                    {[...Array(10)].map(() => (
                        // eslint-disable-next-line react/jsx-key
                        <ViewallComment />
                    ))

                    }
                </div>
            </div>

        </div>
    );
};

export default PostDetail;