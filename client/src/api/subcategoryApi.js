import axios from "axios";

export const subcategoryApi = axios.create({
    baseURL: "https://onlinestore-34p3.onrender.com/subcategory",
})