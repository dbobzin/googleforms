const express = require("express");

const cors = require("cors");
const axios = require("axios");

const app = express();

// Enable CORS for all requests to the server
app.use(cors());

// Set up a route for making POST requests to the Google Forms API
app.post("/forms/:formId/submit", (req, res) => {
  // Get the ID of the form from the request parameters
  const formId = req.params.formId;

  // Make a POST request to the Google Forms API using the axios library
  axios.post(
    `https://docs.google.com/forms/d/e/${formId}/formResponse`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
    req.body
  ).then((response) => {
    // Send the response from the Google Forms API back to the web page
    res.send(response.data);
  }).catch((error) => {
    // Send any errors that occurred back to the web page
    res.status(error.response.status).send(error.response.data);
  });
});

// Start the server on port 8080
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

