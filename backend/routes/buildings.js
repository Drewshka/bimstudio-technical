/*

You have been asked to write an endpoint which returns a list of buildings.
This data is currently stored in a JSON file within the 'data' folder in the backend.

You notice that there is a 'secretInformation' key within each 'building' object.
The team leader tells you that we do not want to expose this information in this endpoint.

*/

const router = require("express").Router();
const express = require("express");
const fs = require("fs");
const omit = require("omit");

let buildingData = [];

const getBuildingData = () => {
  fs.readFile("./data/buildings.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    buildingData = JSON.parse(data);
  });
};

getBuildingData();

router.get("/all", (req, res) => {
  res.json(omit(["secretInformation"], buildingData.buildings));
});

module.exports = router;
