import LoadingSkeleton from "@/components/LoadingCompo/LoadingSkeleton";
import RecentPostSkeleton from "@/components/LoadingCompo/RecentPostSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
    return (
        <div className="h-screen w-full flex  ">
            <div className="grid grid-cols-1 gap-3 w-full lg:w-3/4 h-full">
                <div className='w-full max-w-2xl  mx-auto'>
                    <Skeleton className="w-full h-12 my-4" />
                </div>
                {[...Array(1)].map((index) => (
                    <LoadingSkeleton key={index} />
                ))}
            </div>

            <div className="hidden pt-5 gap-3  w-full lg:w-96 lg:flex flex-col    lg:border-s-2">
                {[...Array(4)].map((index) => (
                    <RecentPostSkeleton key={index} />
                ))}
            </div>

        </div>
    );
};

export default loading;