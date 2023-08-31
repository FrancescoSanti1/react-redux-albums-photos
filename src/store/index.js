import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/users";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUser } from "./thunks/addUser";
import { deleteUser } from "./thunks/deleteUser";

const store = configureStore({
    reducer: {
        users: usersReducer
    }
});

export { store, fetchUsers, addUser, deleteUser };