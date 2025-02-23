if(process.env.NODE_ENV !="production"){
  require('dotenv').config();
  }
const mongoose = require("mongoose");
const initData = require("./data");
const Blog = require("../models/blog");
const MongoStore = require("connect-mongo");


const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const store = MongoStore.create({
  mongoUrl : dbUrl, 
  crypto :{
    secret :process.env.SECRET,
  },
  touchAfter : 24*3600,
})


const initDB = async () => {
  await Blog.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: new mongoose.Types.ObjectId("67a1f544d2671c610fde569b"),
  }));
  await Blog.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
