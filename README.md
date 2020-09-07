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

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name **evday_pos**, and Import file sql to **phpmyadmin**
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

### Authentication

| Name       | Method    | Link                | Request |
| ---------- | --------- | ------------------- | ------- |
| Register   | POST      | `/user/register`    | Body `{ "user_email": "admin@gmail.com" , "user_password": "Admin123", "user_name": "admin" }` |
| Login      | GET       | `/user/login`       | Body `{ "user_email": "Your email", "user_password": "Your password" }` |
| Edit User  | POST      | `user/edit`         | Body `{ "user_name": "admin", "user_status": 1 or 0 , "user_password": "Admin123" }` |


### Product

| Name                  | Method    | Link          | Request       |
| --------------------- | --------- | ------------- | ------------- |
| Get Product           | GET       | `/product?page=1&limit=9&orderBy=product_created_at DESC` | You can customize the pagination and sorting |
| Get Product By Id     | GET       | `/product/:id`        |       |
| Search Product        | GET       | `/product/search/q?product_name=donut`   | |
| Get Active Product    | GET       | `/product/active/beta`|               |
| Add Product           | POST      | `/product`          | Body `{ "product_name": "Donut", "product_image": file, "product_price": 1000, "category_id": 1, "product_status": 1 or 0 }` |
| Edit Product          | PATCH     | `/product/:id`      | Body `{ "product_name": "New Donut", "product_image": file, "product_price": 1000, "category_id": 1, "product_status": 1 or 0 }` |
| Delete Product        | DELETE    | `/product/:id`      |         |

### Category 
| Name                   | Method | Link            | Request           |
| ---------------------- | ------ | --------------- | ----------------- |
| Get Categories         | GET    | `/category`     |                   |
| Get Category By Id     | GET    | `/category:id`  |                   |
| Add Product            | POST   | `/category`     | Body `{ "category_name": "Food", "category_status": 1 or 0 }`  |
| Edit Category          | PATCH  | `/category:id`  | Body `{ "category_name": "Foods", "category_status": 1 or 0 }` | 


### History

<strong>Checkout</strong>

Set the POST mehod in route `/history` and set the items data. The subtotals of all items are automatically calculated

```
{
    "items": [
        {
            "product_id": 7,
            "product_name": "Chicken Katsu Dabu-dabu",
            "qty": 4,
            "subtotal": 60000
        },
        {
            "product_id": 2,
            "product_name": "Cofee Latte",
            "qty": 2,
            "subtotal": 15000
        }
        
    ]
}
```

<strong>Others</strong>
| Name                  | Method    | Link                      | Note                                 |
| -----------------     | --------- | ------------------------- | ------------------------------------ |
| Get Recent Orders     | GET       | `/history/page=1&limit=4` | You can customize the page and limit |
| Get Order By Id       | GET       | `/history/:id`            |   |

## The postman documentation is <a href="https://documenter.getpostman.com/view/12631524/TVCiU6kU">here</a>

https://documenter.getpostman.com/view/12631524/TVCiU6kU
