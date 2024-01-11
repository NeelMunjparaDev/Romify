const express = require('express');
const userControllers = require('./../controllers/userControllers.js');
const authControllerController = require('./../controllers/authController.js');

const router = express.Router();

router.post('/signup', authControllerController.signup);
router.post('/login', authControllerController.login);

router.post('/forgotPassword', authControllerController.forgotPassword);
router.patch('/resetPassword/:token', authControllerController.resetPassword);

router.patch(
  '/updateMyPassword',
  authControllerController.protect,
  authControllerController.updatePassword,
);

router.patch(
  '/updateMe',
  authControllerController.protect,
  userControllers.updateMe,
);

router.delete(
  '/deleteMe',
  authControllerController.protect,
  userControllers.deleteMe,
);
router
  .route('/')
  .get(userControllers.getAllUser)
  .post(userControllers.createUser);

router
  .route('/:id')
  .get(userControllers.getUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = router;
