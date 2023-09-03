import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/users";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUser } from "./thunks/addUser";
import { deleteUser } from "./thunks/deleteUser";
import { albumsApi } from "./apis/albums";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { photosApi } from "./apis/photos";

const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware)
});

setupListeners(store.dispatch);

export { store, fetchUsers, addUser, deleteUser };
export { useGetAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } from "./apis/albums";
export { useGetPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } from "./apis/photos";