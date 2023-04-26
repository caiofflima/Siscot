import express from "express";

const app = express();

app.listen(3000, function () {
  console.log("Server is running");
});


app.get("/", (req, res) => {
	return res.send("Servidor Projeto Siscot Ativo!");
});