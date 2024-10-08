
const getSingleBlog = async(id:string) => {
    try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("error")
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
};

export default getSingleBlog;