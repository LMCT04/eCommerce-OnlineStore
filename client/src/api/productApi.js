import axios from "axios";

export const productApi = axios.create({
    baseURL: "http://localhost:1234/product",
})