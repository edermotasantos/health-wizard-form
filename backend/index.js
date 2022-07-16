const express = require('express');
const userRoutes = require('./routes/userRoutes');
const patientRoutes = require('./routes/patientRoutes');

const app = express();
app.use(express.json());

const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use('/users', userRoutes);
app.use('/patients', patientRoutes);

app.get('/', (request, response) => {
  response.send();
});


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));
