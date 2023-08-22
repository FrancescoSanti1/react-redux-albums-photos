import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const response = await axios.get("http://localhost:3005/users");

    await sleep(2);
    return response.data;
});

const sleep = (seconds) => new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
})

export { fetchUsers };