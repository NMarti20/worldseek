import axios from "axios";

const url = "http://localhost:5000/posts";

//will return posts that we have in the database
export const fetchPosts = () => axios.get(url);
