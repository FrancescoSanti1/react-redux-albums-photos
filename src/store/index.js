import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/users";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUser } from "./thunks/addUser";
import { deleteUser } from "./thunks/deleteUser";
import { albumsApi } from "./apis/albums";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(albumsApi.middleware)
});

setupListeners(store.dispatch);

export { store, fetchUsers, addUser, deleteUser };
export { useGetAlbumsQuery } from "./apis/albums";