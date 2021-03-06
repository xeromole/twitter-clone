import mongoose from "mongoose";
import TweetModel from "./../models/Tweet";

export const index = async (req, res) => {
  try {
    const tweets = await TweetModel.find({}).sort("-createdAt");
    res.json(tweets);
  } catch (error) {
    res.end(error);
  }
};

export const store = async (req, res) => {
  try {
    const tweets = await TweetModel.create(req.body);
    req.io.emit("tweet", tweets);
    res.json(tweets);
  } catch (error) {
    res.json(error);
  }
};
