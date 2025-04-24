const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  destinations: [
    {
      to: { type: String, required: true },
      price: { type: Number, required: true },
      coordinates: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
      }
    }
  ]
});

const Station = mongoose.model('Station', stationSchema);

module.exports = Station;