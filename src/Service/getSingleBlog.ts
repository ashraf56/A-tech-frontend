'use server'
const getSingleBlog = async(id:string) => {
    const serverAPi = process.env.NEXT_PUBLIC_serverApi
    try {
        const res = await fetch(`${serverAPi}/blogs/${id}`, {cache:'no-store'})
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