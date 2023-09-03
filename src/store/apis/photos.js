import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const photosApi = createApi({
    reducerPath: "photos",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
    }),
    endpoints(builder) {
        return {
            getPhotos: builder.query({
                query: (album) => {
                    return {
                        url: "/photos",
                        params: {
                            albumId: album.id
                        },
                        method: "GET"
                    }
                },
            }),
            addPhoto: builder.mutation({
                query: (album) => {
                    return {
                        url: "/photos",
                        method: "POST",
                        body: { albumId: album.id, url: faker.image.url({ width: 150, height: 150 }) }
                    }
                },
            }),
            deletePhoto: builder.mutation({
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: "DELETE"
                    }
                },
            })
        }
    }
});

export const { useGetPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } = photosApi;