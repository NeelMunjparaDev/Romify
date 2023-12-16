const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());

//middle ware
app.use((req, res, next) => {
  console.log('Hello from Middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
//functions for crud tours

const getAllTour = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'Success',
    requestedTime: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      ststus: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'Success',
    results: tours.length,
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  //   console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        ststus: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const updateTOur = (req, res) => {
  if (!req.params.id * 1 > tours.length) {
    return res.status(404).json({
      ststus: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here..>',
    },
  });
};

const deleteTour = (req, res) => {
  if (!req.params.id * 1 > tours.length) {
    return res.status(404).json({
      ststus: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: {
      tour: null,
    },
  });
};

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// app.get('/api/v1/tours', getAllTour);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTOur);
// app.delete('/api/v1/tours/:id', deleteTour);

app.route('/api/v1/tours').get(getAllTour).post(createTour);

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTOur)
  .delete(deleteTour);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}....`);
});
