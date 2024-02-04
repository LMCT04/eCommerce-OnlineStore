import axios from "axios";

export const productApi = axios.create({
    baseURL: "https://onlinestore-34p3.onrender.com/product",
})