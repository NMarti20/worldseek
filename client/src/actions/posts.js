//we are importing everything as an api
import * as api from "../api";

//create Action Creators which are functions that return actions
export const getPosts = () => async (dispatch) => {
  try {
    //first, get response from api
    const { data } = await api.fetchPosts();
    dispatch();
    const action = { type: "FETCH_ALL", payload: data };
  } catch (error) {
    console.log(error.message);
  }
};
