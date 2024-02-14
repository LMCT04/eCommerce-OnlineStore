import axios from "axios";

export const categoryApi = axios.create({
    baseURL: "https://onlinestore-34p3.onrender.com/category",
})