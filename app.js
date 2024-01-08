const express = require("express");
const app = express();
const getRoute = require("./routes/todos");
const port = 3000;

app.use("/todos", getRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});