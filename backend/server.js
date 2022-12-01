const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.listen(3001);

require("./src/Routes/index")(app);
