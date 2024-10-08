export const getAllBlog = async ()=>{
try {
    const res = await fetch(`http://localhost:5000/api/blogs`, { cache: "no-store" });
      
    if (!res.ok) {
      throw new Error("data load failed");
    }
    const data = res.json()
    return data;
} catch (error) {
    console.log(error);
    
}
}