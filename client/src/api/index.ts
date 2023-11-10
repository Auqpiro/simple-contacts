import axios from "axios";

export default axios.create({
    baseURL: "https://demo-json-api.vercel.app",
    // baseURL: "http://localhost:5001",
})
