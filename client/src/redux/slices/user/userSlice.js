import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        starLoadingUsers: (state) => {
            state.isLoading = true;
        },
        setUsers: (state, action) => {
            state.isLoading = false;
            state.users = action.payload.users;
        }
    },
});

export const { starLoadingUsers, setUsers } = userSlice.actions;