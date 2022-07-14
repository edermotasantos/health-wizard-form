const express = require('express');

const app = express();
app.use(express.json());

const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));
