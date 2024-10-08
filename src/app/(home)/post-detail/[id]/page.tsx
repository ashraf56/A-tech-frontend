/* eslint-disable @typescript-eslint/no-explicit-any */
import PostDetail from "@/components/PostDetail";
import getSingleBlog from "@/Service/getSingleBlog";

const page = async ({ params }:{params:any}) => {
    const {id}= params 
   
    const data = await getSingleBlog(id)
    console.log(data);
    
    return (
        <div className="mx-auto">
           <PostDetail data={data.data}/>
        </div>
    );
};

export default page;