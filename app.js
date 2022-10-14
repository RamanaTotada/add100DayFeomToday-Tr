const express = require("express");

const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (requset, response) => {
  let today = new Date();

  const result = addDays(today, 100);

  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
