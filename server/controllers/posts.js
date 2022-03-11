//handles the logic
import PostMessage from "../models/postsMessage.js";

export const getPosts = async (req, res) => {
  try {
    //try to retrieve all posts we have in database
    const postMessages = await PostMessage.find();
    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = (req, res) => {
  res.send("Post Creation!");
};
