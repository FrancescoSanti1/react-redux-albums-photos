import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/users";
import { fetchUsers } from "./thunks/fetchUsers";

const store = configureStore({
    reducer: {
        users: usersReducer
    }
});

export { store, fetchUsers };