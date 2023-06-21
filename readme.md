# About

Basic application for calling the pointstreak api on a loop and outputting the specified endpoint's data into a json or xml file

# Setup

## Install Node.js

Install LTS edition of Node.js
https://nodejs.org/en/download

## Download this repo

Go to the upper right hand corner and click the green "Code" button and then choose "Download Zip". Unzip in the desired file location.

## Fill out the .env file

Fill out the .env file. An example file is included with the app. There are comments above each field with what needs to go in it.

## Run the program (Mac or Linux)

Open a terminal or command line in the applications directory. For example, if you have the file in Documents, you'll want to be in '.../Documents/pointstreak-filesteam'.

Enter the command `npm run start`.

The app will complete a small download to gather dependencies and then start grabbing data. It will output a timestamp of the last time the file was updated and will keep running on a loop. You will need to enter 'ctrl + c' to close the application.
