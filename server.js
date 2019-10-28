import { Mongoose } from "mongoose";

//if deployed, use the deployed database. otherwise use the local
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//connect to Mongo DB
Mongoose.connect(MONGODB_URI);