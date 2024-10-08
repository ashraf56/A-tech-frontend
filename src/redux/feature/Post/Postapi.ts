import { baseApi } from "@/redux/baseApi/baseApi"


const PostApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        CreateAblog: build.mutation({
            query: (data) => ({
                url: 'blogs/create-blog',
                method: "POST",
                body: data
            })
        }),
    }),



})


export const {
useCreateAblogMutation
} = PostApi