# Wine Connoisseur

A full stack web app for listing different wines.

## MERN stack used

* Frontend - React JS, Javascript, Redux, CSS, Material UI
* Backend - Node JS, Express JS, Parse Server, Parse Dashboard
* Database - MongoDB

## Features implemented

* Parse Server based backend hosting complete wine data.
* Wine data fetched using Parse SDK API calls.
* Wine data housed in Redux store as a single source of truth for app.
* Redux store managed through actions & reducers.
* Material UI React components used to build UI.
* A simple wine animation is displayed while data is being fetched over the network.
* Each wine item is displayed in a Card View with designation, variety, province, points & price visible at a glance.
* Card view can be expanded to read compelete description.
* Pseudo toggle favorite button provided on each card view. ( Please note: Favorite info is currently not stored in database, this is only to demonstrate functionality of favorite button. )
* A search text field allows user to search/filter wines by variety or province. Filteration occurs in real time as search query is typed.
* Logger middleware consoles every dispatched action & corresponding state for easy debugging. This is visible in the browser console.
* If client fails to communicate with server to fetch data, alert message will be displayed on browser.

## Tested on

* Macbook Pro : macOS 10.13.4 Chrome & Safari
* Moto G5S Plus : Android 7.1.1 Chrome

## Project contents

* backend/ - source code for backend
* frontend/ - source code for frontend
* data_dump.agz - mongodump archive

( Please note both backend & frontend source directories have their respective .env files with required environment variables )

## Requirements

* MongoDB
* Node & NPM
* Yarn

## Instructions

* Run command `mongod` on local machine.
* Import database from mongodump archive (can be done using Studio 3T GUI tool or mongorestore CLI tool).
* On the terminal, cd into backend directory.
* Run command `npm install` to install required packages & dependencies.
* Run command `npm start` to start backend server on local machine.
* Dashboard for backend will be available at http://localhost:1337/dashboard/
* Login credentials - username : admin password : admin.
* Once backend is running successfully, open a new terminal and cd into frontend directory.
* Run command `yarn install` to install required packages & dependencies.
* Run command `yarn start` to start frontend client on local machine.
* Client will be available at http://localhost:3000/
