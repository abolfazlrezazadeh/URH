const Station = require('../../../model/stations/stations.model')
const controller = require('../main.controller')

class stationsController extends controller {
  async addStations (req, res, next) {
    const { name, coordinates, destinations } = req.body
    try {
      const station = new Station({ name, coordinates, destinations })
      const savedStation = await station.save()
      res.status(201).json(savedStation)
    } catch (error) {
      next(error)
    }
  }
  async getAll (req, res, next) {
    try {
      const allStations = await Station.find()
      return res.status(200).json(allStations)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = {
    stationController:new stationsController()
}