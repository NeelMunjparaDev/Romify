const express = require('express');
const router = express.Router();
const userControllers = require('./../controllers/userControllers.js');
const authController = require('./../controllers/authController.js');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userControllers.getMe, userControllers.getUser);
router.patch('/updateMe', userControllers.updateMe);
router.delete('/deleteMe', userControllers.deleteMe);

router.use(authController.restrictionTo('admin'));
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
