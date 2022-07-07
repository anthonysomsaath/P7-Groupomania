import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3300",
    headers: {"Access-Control-Allow-Origin": "*"}
})