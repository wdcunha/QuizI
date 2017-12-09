#!/bin/bash
echo "This is a shell script to install all needs for Expressjs work!"

npm init
sudo npm install express morgan ejs body-parser knex pg multer --save-dev nodemon

knex init

echo "Here is the end of instalation."

echo "***Use this command to make the file executable: chmod +x file."
