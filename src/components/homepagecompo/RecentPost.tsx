/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllBlog } from "@/Service/getAllBlog";
import RecentPostcard from "./Post/RecentpostCard";

const RecentPost = async () => {
    const data = await getAllBlog()
    return (
        <div className="w-full lg:w-96 hidden lg:block  h-full lg:border-s-2">
            <h1 className="py-4 text-bold text-center  text-xl">Recent post</h1>
            <div className="px-2 flex flex-col gap-3">
                {
                    data?.data?.reverse().map((rp: any) => (
                        <RecentPostcard rp={rp} key={rp._id} />
                    ))
                }

            </div>
        </div>
    );
};

export default RecentPost;