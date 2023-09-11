import { configureStore } from "@reduxjs/toolkit";
import { albumsApi } from "./apis/albums";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { photosApi } from "./apis/photos";
import { usersApi } from "./apis/users";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(usersApi.middleware)
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware)
});

setupListeners(store.dispatch);

export { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } from "./apis/users";
export { useGetAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } from "./apis/albums";
export { useGetPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } from "./apis/photos";