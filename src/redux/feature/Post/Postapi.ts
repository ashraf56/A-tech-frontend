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
        addUpvote: build.mutation({
            query: (id) => ({
                url: `blogs/${id}/upvote`,
                method: "PATCH",
            }),
            invalidatesTags: ['poSt']
        }),
        deleteAcomment: build.mutation({
            query: (data) => ({
                url: `blogs/${data.id}`,
                method: "DELETE",
                body: data.commentid
            }),
            invalidatesTags: ['poSt']
        }),
        Searchitems: build.query({
            query: (data) => ({
                url: `blogs?searchTerm=${data}`,
                method: "GET"
               
            }),
            providesTags: ['poSt']
        })
    }),



})


export const {
useCreateAblogMutation,
useMakeAcommentMutation,
useDeleteAcommentMutation,
useSearchitemsQuery,
useAddUpvoteMutation

} = PostApi