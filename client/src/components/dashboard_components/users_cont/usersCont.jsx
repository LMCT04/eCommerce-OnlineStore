import React from 'react';
import style from './usersCont.module.css'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from '../../../redux/slices/user'
import UserCard from '../user_card/userCard';

const UsersCont = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    
    const {users = [], isLoading} = useSelector((state) => state.user)
    console.log(isLoading);

    return (
        <>
            <div className={style.background}>
                {
                    users.length > 0 ? (
                        users.map((user) =>
                            <UserCard key={user.id} elements={user} />
                        )
                    ) : (
                        <>
                            Loading
                        </>
                    )
                }
            </div>
        </>
    );
}

export default UsersCont;
