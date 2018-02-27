# movie-api

## Requirements
- Existing MongoDB Installation

### Import some Sample-Data
After installing your MongoDB you can import some sample data

1. unzip import_db.zip
2. cd into unzipped folder
4. run following command


    mongoimport --db movies --collection movie --file movie.json
    mongoimport --db movies --collection review --file review.json
    mongoimport --db movies --collection genre --file genre.json

## Start Server
Make sure MongoDB is up and running then just run

    yarn start

To start the application in DEV-Mode run

    yarn run start:dev
