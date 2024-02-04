import { userApi } from "../../../api/userApi"
import { setUsers, starLoadingUsers } from "./userSlice"

export const getUsers = () => {
    return async ( dispatch, getState ) => {
        dispatch( starLoadingUsers() )

        const {data} = await userApi.get()

        dispatch( setUsers({users: data}) )
    }
}