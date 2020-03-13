Boiler plate react, node, express, Google Auth through passport, and Postgres DB with functioning NavBar
- Edited by Paul Soniat - 
Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
yarn
cd client
yarn
```

Create a .env file and add 
db_uri=''
GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET=''

This will create connection to Postgres cloud DB and allow google authentication to route to the home page

To start the server and client at the same time (from the root of the project)

```
yarn dev
```

Will load up localhost:3000 and proxy requests to localhost:5000