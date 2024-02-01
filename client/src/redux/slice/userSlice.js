import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    lastname: '',
    userName: '',
    image: '',
    email: '',
    password: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //actions

        // Crear nuevo usuario
        addUser: (state, action) => {
            const { name, lastname, userName, image, email, password } = action.payload;
            state.name = name;
            state.lastname = lastname;
            state.userName = userName;
            state.image = image;
            state.email = email;
            state.password = password;
        },
        changeFullName: (state, action) => {
            state.name = action.payload;
            state.lastname = action.payload;
        }
    }
})

export const { addUser, changeFullName } = userSlice.actions;
export default userSlice.reducer;
