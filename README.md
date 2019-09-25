# Node-JS-API-Authenctication-with-JWT

NodeJS Authenctication with jwt

**JWT AUTHENCTICATION**

```

Used for adding protection to your routes in a API

You add Authentication to fetch a token such that you make  requests with that token so as to have access to the protected routes.

```

```
In browser the token is saved in a cookie or local storage and is created upon LogIn and you can use it to access the routes.

```

**Installation**

```
npm i -D nodemon(Installed as a dev dependency.)
```

```
there are two versions of JWT.
One is synchromous and the other is asynchronous.

//Asynchronous means you have got a callback when creating the token.

```

**Token Verification**

```

(a)Begin by calling a middleware in one of your protected routes.

(b)The middleware function checks for the presence of the token in the request headers.
(remeber there are propeties of a request)

(c)Due to the format there s  an array split.


```

**Merging with FrontEnd**

```
It is recomendend that when using a front end client example react that you should save your token in Local Storage.

Saving in a cookie is also another alternative but this is however not very much recommended.

```


**Expiration**
```
You may as well put in the token expiration so that the token expires after a certain period.


```

**Documentation Link**

```
https://github.com/auth0/node-jsonwebtoken

```

```
Notes by Mbugua Caleb

```

```
Tutor :Travesy Media.

```