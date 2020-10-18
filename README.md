<h1 align="center">ExpressJS - Evday-POS RESTfull API</h1>


Evday-Pos is a restfull-api web that provides point of sale features. The project is built with express.js and there are several endpoints that you can easily to access.
[More about Express](https://en.wikipedia.org/wiki/Express.js)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v13.5.0-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
DB_HOST=localhost // Database host
DB_USER=your_user
DB_PASS=yout_password
DB_NAME=your_database

PORT=this_project_port //example: 3000
IP=this_poject_ip_address // example: 127.0.0.1

USER_EMAIL = your email
PASS_EMAIL = your email password
```
<b>Note</b>: Make sure the email used is less secure
1. go here https://myaccount.google.com/lesssecureapps => enable for less secure apps.
2. go here https://accounts.google.com/DisplayUnlockCaptcha => enable/continue and then try.

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name **evday_pos**, and Import file sql to **phpmyadmin**
6. Type ```npm start``` on your CMD or Terminal
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/)


## The postman documentation is [here](https://documenter.getpostman.com/view/12631524/TVCiU6kU)

https://documenter.getpostman.com/view/12631524/TVCiU6kU
