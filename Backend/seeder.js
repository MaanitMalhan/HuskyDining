import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import request from "./Data/request.js";
import diningHall from "./Data/dummyDiningHall.js";
import reviews from "./Data/dummyReviews.js";
import users from "./Data/dummyUsers.js";
import RequestFlex from "./models/requestFlexModel.js";
import RequestPoints from "./models/requestPointsModel.js";
import DiningHall from "./models/diningHallModel.js";
import Review from "./models/reviewModel.js";
import User from "./models/userModel.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await DiningHall.deleteMany();
    await RequestFlex.deleteMany();
    await RequestPoints.deleteMany();
    await Review.deleteMany();

    const createdUsers = await User.create(users);
    const createdDiningHall = await DiningHall.insertMany(diningHall);

    // Function to get a random dining hall ID
    const getRandomDiningHallID = () => {
      const randomIndex = Math.floor(Math.random() * createdDiningHall.length);
      return createdDiningHall[randomIndex]._id;
    };

    // Helper function to get a random user ID
    const getRandomUserID = () => {
      const randomIndex = Math.floor(Math.random() * createdUsers.length);
      return createdUsers[randomIndex]._id;
    };

    const sampleRequest = request.map((req) => {
      return {
        ...req,
        diningHallID: getRandomDiningHallID(),
        userID: getRandomUserID(),
      };
    });

    const sampleReview = reviews.map((rev) => {
      return {
        ...rev,
        diningHallID: getRandomDiningHallID(),
        userID: getRandomUserID(),
      };
    });

    await RequestFlex.insertMany(sampleRequest);
    await Review.insertMany(sampleReview);

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await DiningHall.deleteMany();
    await RequestFlex.deleteMany();
    await RequestPoints.deleteMany();
    await Review.deleteMany();

    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
