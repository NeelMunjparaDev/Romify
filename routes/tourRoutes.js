const express = require('express');
const tourControllers = require('./../controllers/tourControllers.js');
const router = express.Router();

router.param('id', tourControllers.checkID);

router
  .route('/')
  .get(tourControllers.getAllTour)
  .post(tourControllers.checkBody, tourControllers.createTour);

router
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTOur)
  .delete(tourControllers.deleteTour);

module.exports = router;
