
const setUpvote = async (id: string) => {
    const serverAPi = process.env.NEXT_PUBLIC_serverApi
    try {
        const res = await fetch(`${serverAPi}/blogs/${id}/upvote`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            }
        }
        )
        if (!res.ok) {
            throw new Error("error")
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
};

export default setUpvote;