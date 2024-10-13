/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllBlog } from "@/Service/getAllBlog";
import PostManagerCard from "../homepagecompo/Post/PostManagerCard";

const Postmanager = async () => {
  const blogs = await getAllBlog()
  return (
    <div className="w-full grid grid-cols-1 gap-3 my-5 h-96 overflow-y-scroll">
      {
        blogs?.data?.map((blog: any) => (
          <PostManagerCard p={blog} key={blog._id} />
        ))
      }
    </div>
  );
};

export default Postmanager;