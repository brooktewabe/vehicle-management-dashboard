const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/vehicles', vehicleRoutes);

// 404 Handler for non-existing routes
app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found",
    requestedUrl: req.originalUrl
  });
});

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

module.exports = app;