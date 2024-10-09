import { baseApi } from "@/redux/baseApi/baseApi"


const PostApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        CreateAblog: build.mutation({
            query: (data) => ({
                url: 'blogs/create-blog',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['poSt']
        }),
        makeAcomment: build.mutation({
            query: (data) => ({
                url: `blogs/${data.id}`,
                method: "PUT",
                body: data.info
            }),
            invalidatesTags: ['poSt']
        }),
        deleteAcomment: build.mutation({
            query: (data) => ({
                url: `blogs/${data.id}`,
                method: "DELETE",
                body: data.info
            }),
            invalidatesTags: ['poSt']
        })
    }),



})


export const {
useCreateAblogMutation,
useMakeAcommentMutation,
useDeleteAcommentMutation
} = PostApi