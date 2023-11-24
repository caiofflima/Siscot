const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
