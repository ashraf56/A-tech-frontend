import { baseApi } from "@/redux/baseApi/baseApi"


const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: "POST",
                body: data
            })
        }),
        SignUpUser: build.mutation({
            query: (data) => ({
                url: 'auth/signup',
                method: "POST",
                body: data
            })
        }),

        getUpdateUserInfo: build.mutation({
            query: (data) => ({
                url: `auth/${data.id}`,
                method: "PUT",
                body: data.info
            }),
            invalidatesTags: ['auth']
        }),

        getSingleUser: build.query({
            query: (id) => ({
                url: `auth/${id}`,
                method: "GET",
            }),
            providesTags: ['auth']
        }),
        getAllUsers: build.query({
            query: () => ({
                url: `auth`,
                method: "GET",
            }),
            providesTags: ['auth']
        }),

    }),



})


export const {
    useLoginUserMutation,
    useSignUpUserMutation,
    useGetSingleUserQuery
    , useGetUpdateUserInfoMutation,
    useGetAllUsersQuery

} = authApi