const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express working!");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}!`);
});
