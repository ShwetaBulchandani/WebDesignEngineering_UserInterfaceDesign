# ASSIGNMENT 8

- Name: Shweta Chandraprakash Bulchandani
- NUID: 002769540
- Email ID: bulchandani.s@northeastern.edu

## Topic: Assignment 8th use of CRUD operations with the help Node, Mongo, and Express on Postman

### Project aspects:

Created a app.js file for connecting to the mongodb and running the localhost on 27017 port

- Routers -> userRouters are created for each operation which will go to the Controllers for respective operations
- Controllers -> In userControllers, for each operation a different method is created with await and async handling to perform their respective operations on the mongodb
- Models -> In userModel, The schema for the user table is defined and bcrypt of password also done before saving into the database
- Middlewares -> In errorMiddlewares all the generic errors are defined ex. 400 "Not Found" or 201 "Success"

### Setup:

- Open the app.js file on vscode & in terminal write the "nodemon run start"
- Open the Postman and start performing operations with the below URLs
  - POST -> http://localhost:27017/user/create
  - PUT -> http://localhost:27017/user/edit
  - DELETE -> http://localhost:27017/user/delete
  - GET -> http://localhost:27017/user/getAll
