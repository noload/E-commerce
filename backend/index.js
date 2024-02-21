const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRoute = require("./routes");
const { User } = require("./model");

const setupAndStart = () => {
  const app = express();
  app.use(express.json());

  app.use("/api", apiRoute);

  app.listen(PORT, () => {
    console.log(`Server listning on post ${PORT}`);
  });
};

setupAndStart();
