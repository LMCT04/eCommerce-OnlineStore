import axios from "axios";

export const userApi = axios.create({
    baseURL: "https://onlinestore-34p3.onrender.com/user",
})