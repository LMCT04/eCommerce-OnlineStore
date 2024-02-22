import { userApi } from "../../../api/userApi";
import { setUsers, starLoadingUsers, addUser } from "./userSlice";

export const getUsers = () => {
    return async (dispatch, getState) => {
        dispatch(starLoadingUsers());

        const { data } = await userApi.get();

        dispatch(setUsers({ users: data }));
    };
};

export const createUser = (user) => {
    return async (dispatch, getState) => {
        dispatch(starLoadingUsers());

        try {
            const response = await userApi.post("/", user);
            const newUser = response.data;
            dispatch(addUser({ user: newUser }));
        } catch (error) {
            console.log('Error create User', error);
        }
    };
};
