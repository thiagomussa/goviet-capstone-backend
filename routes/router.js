import express from "express";
const router = express.Router();
import fs from "fs";

router.get("/cuisine", (_req, res) => {
  // add data json to the project -- DONE

  // read data from json -- DONE

  const dishes = fs.readFileSync("./data/cuisine.json", "utf-8");
  const dish = JSON.parse(dishes);

  res.json(dish);

  // send data in response
});

router.get("/cities", (_req, res) => {
  const cities = fs.readFileSync("./data/city.json", "utf-8");
  const city = JSON.parse(cities);

  res.json(city);
});

router.get("/culture", (_req, res) => {
  const cultures = fs.readFileSync("./data/culture.json", "utf-8");
  const culture = JSON.parse(cultures);

  res.json(culture);
});

export default router;
