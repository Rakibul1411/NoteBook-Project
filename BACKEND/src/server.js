// Initialize Express
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoDbPath = "mongodb+srv://mdrakibul11611:natiq11611@cluster0.eg4hw.mongodb.net/notesdb";
mongoose.connect(mongoDbPath).then(function(){

  // Add Routes
  app.get("/", function(req, res) {
    const response = { message: "API Works!" };
    res.json(response);
  });

  const noteRouter = require("./routes/Note");
  app.use("/notes", noteRouter);

})

// Start the Server on Port 5000
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("Server is running on PORT: " + PORT);
});
