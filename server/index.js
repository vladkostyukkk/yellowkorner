const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  try {
    const searchQuery = req.query.q;
    const apiUrl = `https://www.yellowkorner.com/on/demandware.store/Sites-YKF-Site/en/SearchServices-GetSuggestions?q=${searchQuery}`;
    const response = await axios.get(apiUrl);
    console.log(response, 'response');
    res.send(response.data);
  } catch (e) {
    console.error(e.message, 'error message from server');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
