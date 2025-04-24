const { stationController } = require("../../http/controller/stations/stations.controller")

const router = require("express").Router()


router.post("/",stationController.addStations)
router.get("/",stationController.getAll)


module.exports={
    stationRouter:router
}