# Wine Connoisseur

A coding challenge on [HackerEarth](https://www.hackerearth.com/challenges/) : Full stack web app for listing different wines.

## MERN stack used

* Frontend - React JS, Javascript, Redux, CSS, Material UI
* Backend - Node JS, Express JS, Parse Server, Parse Dashboard
* Database - MongoDB

## Features implemented during challenge

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
* App design has a red hue to reflect the colour of wine.

## Project contents

* backend/ - source code for backend
* frontend/ - source code for frontend
* data_dump.agz - mongodump archive

### Environment variables
* backend - MONGODB_URI, APP_ID, MASTER_KEY, SERVER_URL, APP_NAME, USER_NAME, PASSWORD
* frontend - REACT_APP_BACKEND_APP_ID, REACT_APP_SERVER_URL

(Can be provided through the terminal or a .env file in the respective root directories)

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
* The app will be available at http://localhost:3000/

## Preview

1. **Backend Dashboard**
<img src="https://github.com/Shrreya/Wine-Connoisseur/blob/master/screenshots/backend-dashboard.png"/>

2. **App**
<img src="https://github.com/Shrreya/Wine-Connoisseur/blob/master/screenshots/wines-loading.png"/>
<img src="https://github.com/Shrreya/Wine-Connoisseur/blob/master/screenshots/wines.png"/>
