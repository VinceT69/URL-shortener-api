const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './src/config/config.env' });
const bodyParser = require('body-parser');

const requestRouter = require('./src/routes/urlRoutes');
const { connectDB } = require('./src/database/connectDB');
const mongoUri = process.env.MONGO_DB_URI;
const API_BASE_URL = process.env.API_BASE_URL;
const PORT = process.env.PORT;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('', requestRouter);
try {
  connectDB(mongoUri);
} catch (error) {
  console.log(error);
}
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Url shortener service started on port ${PORT}`);
  });
}

module.exports = { app };
