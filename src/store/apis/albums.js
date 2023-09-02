import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albumsApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005"
    }),
    endpoints(builder) {
        return {
            getAlbums: builder.query({
                query: (user) => {
                    return {
                        url: "/albums",
                        params: {
                            userId: user.id
                        },
                        method: "GET"
                    }
                },
                providesTags: ["Album"]
            }),
            addAlbum: builder.mutation({
                query: (user) => {
                    return {
                        url: "/albums",
                        method: "POST",
                        body: { userId: user.id, title: faker.commerce.productName() }
                    }
                },
                invalidatesTags: ["Album"]
            })
        }
    }
});

export const { useGetAlbumsQuery, useAddAlbumMutation } = albumsApi;