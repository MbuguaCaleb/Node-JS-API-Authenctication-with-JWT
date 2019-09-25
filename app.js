const express = require('express');
const jwt = require('jsonwebtoken');

//Init App
const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
});

//protected Route
app.post('/api/posts', verifyToken, (req, res) => {
  //We are using Asynchronous technique.

  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post Created!',
        authData
      });
    }
  });
});

//Login to get route
app.post('/api/login', (req, res) => {
  //Mock User
  const user = {
    id: 1,
    username: 'Mbugua Caleb',
    email: 'mbuguacaleb30@gmail.com'
  };

  //Async Jwt
  jwt.sign({ user }, 'secretKey', { expiresIn: '30s' }, (err, token) => {
    res.json({
      token
    });
  });
});

//Format of token
//Authorization : Bearer <access_token>

//Verify Token
//Middleware function
//Checking if in any of my requests there is a token.

// function verifyToken(req, res, next) {
//   //Get the auth header Value
//   const bearerHeader = req.headers['authorization'];

//   if (typeof bearerHeader !== 'undefined') {
//     //Split at the space
//     //remebering the format of the token
//     const bearer = bearerHeader.split('');

//     //Get token from Array
//     const bearerToken = bearer[1];

//     //Set the token
//     req.token = bearerToken;

//     //Next Middleware
//     next();
//   } else {
//     //Forbidden
//     res.sendStatus(403);
//   }
// }

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}
app.listen(5000, () => console.log(`Server Started on 5000`));
