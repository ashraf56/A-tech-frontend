import RecentPostcard from "./Post/RecentpostCard";

const RecentPost = () => {
    return (
        <div className="w-full lg:w-96 hidden lg:block  h-full lg:border-s-2">
            <h1>Recent post</h1>
           <div className="px-2 flex flex-col gap-5">
           <RecentPostcard/>
           <RecentPostcard/>
           <RecentPostcard/>
           <RecentPostcard/>
           </div>
        </div>
    );
};

export default RecentPost;