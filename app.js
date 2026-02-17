const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}`);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
