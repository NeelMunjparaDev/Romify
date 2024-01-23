const Tour = require('../Models/tourModels');
const User = require('../Models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { signup } = require('./authController');

exports.getOverview = catchAsync(async (req, res, next) => {
  req.session.flashMessage =
    'Welcome to My Project Site!\nThis website serves as a showcase of my Node.js skills. Please note that some functions may not work as intended, as this site is designed for educational purposes. Feel free to explore and learn along with me. Thank you for visiting!';
  // 1) get data from collection
  const tours = await Tour.find();

  // 2) build template

  // 3) render that template using tour data from 1

  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
    flashMessage: req.session.flashMessage,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1)get the data, for the request tour (including reviews and guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name.', 404));
  }

  res
    .status(200)

    .render('tour', {
      title: `${tour.name} Tour`,
      tour,
    });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Login into your account',
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account',
  });
};

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    },
  );
  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser,
  });
});

exports.getsignupForm = (req, res) => {
  console;
  res.status(200).render('signup', {
    title: 'Login into your account',
  });
};
