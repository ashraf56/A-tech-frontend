'use server'
export const getAllBlog = async ()=>{
  const serverAPi = process.env.NEXT_PUBLIC_serverApi
try {
    const res = await fetch(`${serverAPi}/blogs`,{ next:{revalidate:1000}} );
      
    if (!res.ok) {
      throw new Error("data load failed");
    }
    
    const data = res.json()
    return data;
} catch (error) {
    console.log(error);
    
}
}


