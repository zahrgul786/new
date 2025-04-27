// app.js
const express = require("express");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files from the public folder
app.use(express.static("public"));

// Route to render index page
app.get("/", (req, res) => {
  res.render("index", { title: "Simple EJS App" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
