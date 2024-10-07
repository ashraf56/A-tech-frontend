import { baseApi } from "@/redux/baseApi/baseApi"


const CategoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getallCategory: build.query({
            query: () => ({
                url: 'category',
                method: "GET",
            }),
            providesTags: ['category']
        })

    }),



})


export const {
    useGetallCategoryQuery
} = CategoryApi