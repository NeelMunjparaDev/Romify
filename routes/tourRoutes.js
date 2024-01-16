const express = require('express');
const tourControllers = require('./../controllers/tourControllers.js');
const authController = require('./../controllers/authController.js');
const reviwRouter = require('./../routes/reviewRoutes.js');
const router = express.Router();

// router.param('id', tourControllers.checkID);

// router
//   .route('/:tourId/reviews')
//   .post(
//     authController.protect,
//     authController.restrictionTo('user'),
//     reviewController.createReview,
//   );

router.use('/:tourId/reviews', reviwRouter);

router
  .route('/top-5-cheap')
  .get(tourControllers.aliasTopTours, tourControllers.getAllTour);

router.route('/tour-stats').get(tourControllers.getTourStats);
router
  .route('/match-plan/:year')
  .get(
    authController.protect,
    authController.restrictionTo('admin', 'lead-guide', 'guide'),
    tourControllers.getMonthlyPlan,
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourControllers.getToursWithin);

router.route('/distances/:latlng/unit/:unit').get(tourControllers.getDistances);

router
  .route('/')
  .get(tourControllers.getAllTour)
  .post(
    authController.protect,
    authController.restrictionTo('admin', 'lead-guide'),
    tourControllers.createTour,
  );

router
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(
    authController.protect,
    authController.restrictionTo('admin', 'lead-guide'),
    tourControllers.updateTOur,
  )
  .delete(
    authController.protect,
    authController.restrictionTo('admin', 'lead-guide'),
    tourControllers.deleteTour,
  );

module.exports = router;
