import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const basequery = fetchBaseQuery({
    baseUrl:`${process.env.NEXT_PUBLIC_serverApi}`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers;
    }
  })
  
  
  
  export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: basequery,
    tagTypes: ['auth','category','poSt'],
    endpoints: () => ({}),
  })