const express = require('express');
const tourControllers = require('./../controllers/tourControllers.js');
const router = express.Router();

// router.param('id', tourControllers.checkID);

router
  .route('/top-5-cheap')
  .get(tourControllers.aliasTopTours, tourControllers.getAllTour);

router.route('/tour-stats').get(tourControllers.getTourStats);
router.route('/match-plan/:year').get(tourControllers.getMonthlyPlan);

router
  .route('/')
  .get(tourControllers.getAllTour)
  .post(tourControllers.createTour);

router
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTOur)
  .delete(tourControllers.deleteTour);

module.exports = router;
