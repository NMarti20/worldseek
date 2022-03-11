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

export const createPosts = async (req, res) => {
  const body = req.body;

  //pass values we receive to the request
  const newPost = new PostMessage(body);

  try {
    //asyn action
    await newPost.save();

    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
