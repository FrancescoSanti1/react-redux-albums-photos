import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        builder.addCase(addUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    }
});

export const usersReducer = usersSlice.reducer;