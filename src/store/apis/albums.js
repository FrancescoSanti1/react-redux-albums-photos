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
            await sleep(1);
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
                providesTags: (result, error, user) => {
                    const tags = result.map(album => {
                        return { type: "Album", id: album.id }
                    });
                    tags.push({ type: "UserAlbums", id: user.id });
                    return tags;
                }
            }),
            addAlbum: builder.mutation({
                query: (user) => {
                    return {
                        url: "/albums",
                        method: "POST",
                        body: { userId: user.id, title: faker.commerce.productName() }
                    }
                },
                invalidatesTags: (result, error, user) => [{ type: "UserAlbums", id: user.id }]
            }),
            deleteAlbum: builder.mutation({
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: "DELETE"
                    }
                },
                invalidatesTags: (result, error, album) => [{ type: "Album", id: album.id }]
            })
        }
    }
});

export const { useGetAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } = albumsApi;