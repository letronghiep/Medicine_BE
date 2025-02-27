"use strict";
const mongoose = require("mongoose");

const connectString =
  "mongodb+srv://Cluster09279:letronghiep1@cluster09279.0xtxlqi.mongodb.net/NodeJS-Architecture";
const { countConnect } = require("../helpers/check.connect");

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString)
      .then((_) => {
        console.log("Connected Mongodb Success", countConnect());
      })
      .catch((err) => console.log("Error connect::", err));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
