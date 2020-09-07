<h1 align="center">ExpressJS - Evday-POS RESTfull API</h1>

#background_projek. [More about Express](https://en.wikipedia.org/wiki/Express.js)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v13.5.0-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name #nama_database, and Import file sql to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/)
8. You can see all the end point [here](#end-point)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
DB_HOST=localhost // Database host
DB_USER=your_user
DB_PASS=yout_password
DB_NAME=your_database

PORT=this_project_port //example: 3000
IP=this_poject_ip_address // example: 127.0.0.1
```

## End Point

<strong>Authentication</strong>

| Name       | Method    | Link                | Request |
| ---------- | --------- | ------------------- | ------- |
| Register   | POST      | `/user/register`    | .body `{ user_email: 'admin@gmail.com' , user_password: 'Admin123', user_name: 'admin' }` |
| Login      | GET       | `/user/login`       | .body `{ user_email: 'Your email', user_password: 'Your password' }` |
| Edit User  | POST      | `user/edit`         | .body `{ user_name: 'admin', user_status: 1 or 0 , user_password: 'Admin123' }` |

<strong>Product</strong>

| Name                  | Method    | Link          | Request       |
| --------------------- | --------- | ------------- | ------------- |
| Get Product           | GET       | `/product`           |               |
| Get Product By Id     | GET       | `/product/:id`        | .params `{ product_id: 1 }` |
| Search Product        | GET       | `/product/search/q`   | .query `{product_name: 'Donut' }` |
| Get Active Product    | GET       | `/product/active/beta`|               |
| Insert Product        | POST      | `/product`          | .body `{ product_name: 'Donut', product_image: file, product_price: 1000, category_id: 1, product_status: 1 or 0 }` |
| Edit Product          | PATCH     | `/product/:id`      | .body `{ product_name: 'Donut', product_image: file, product_price: 1000, category_id: 1, product_status: 1 or 0 }` |
| Delete Product        | DELETE    | `/product/:id`      | .params `{ product_id: 1 }` |

