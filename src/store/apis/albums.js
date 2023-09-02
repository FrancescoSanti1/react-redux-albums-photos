import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const sleep = (seconds) => new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
});

export const albumsApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
        fetchFn: async (...args) => {
            await sleep(2);
            return fetch(...args);
        }
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
                providesTags: (result, error, user) => [{ type: "Album", id: user.id }]
            }),
            addAlbum: builder.mutation({
                query: (user) => {
                    return {
                        url: "/albums",
                        method: "POST",
                        body: { userId: user.id, title: faker.commerce.productName() }
                    }
                },
                invalidatesTags: (result, error, user) => [{ type: "Album", id: user.id }]
            })
        }
    }
});

export const { useGetAlbumsQuery, useAddAlbumMutation } = albumsApi;