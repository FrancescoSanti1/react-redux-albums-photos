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
                providesTags: (result, error, album) => {
                    const tags = result.map(photo => {
                        return { type: "Photo", id: photo.id }
                    });
                    tags.push({ type: "AlbumPhotos", id: album.id });
                    return tags;
                }
            }),
            addPhoto: builder.mutation({
                query: (album) => {
                    return {
                        url: "/photos",
                        method: "POST",
                        body: { albumId: album.id, url: faker.image.url({ width: 150, height: 150 }) }
                    }
                },
                invalidatesTags: (result, error, album) => [{ type: "AlbumPhotos", id: album.id }]
            }),
            deletePhoto: builder.mutation({
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: "DELETE"
                    }
                },
                invalidatesTags: (result, error, photo) => [{ type: "Photo", id: photo.id }]
            })
        }
    }
});

export const { useGetPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } = photosApi;