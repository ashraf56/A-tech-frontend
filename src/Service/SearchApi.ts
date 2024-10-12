/* eslint-disable @typescript-eslint/no-explicit-any */

export const SearchApi = async (searchTerm:any)=>{
    const serverAPi = process.env.NEXT_PUBLIC_serverApi
  try {
      const res = await fetch(`${serverAPi}/blogs?searchTerm=${searchTerm}`,{ cache:'no-store'} );
        
      if (!res.ok) {
        throw new Error("data load failed");
      }
      const data = res.json()
      return data;
  } catch (error) {
      console.log(error);
      
  }
  }