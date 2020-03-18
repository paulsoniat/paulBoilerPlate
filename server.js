const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const request = require('request');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Ebay = require('ebay-node-api');



const db = require('./database/index.js')

const dbHelpers = require ('./database/dbHelper.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/*
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

let ebay = new Ebay({
  clientID: 'PaulSoni-jobdemo-SBX-a69eabc60-ce01c235',
  clientSecret: 'SBX-69eabc609347-c335-48ad-baee-f510',
  body: {
      grant_type: 'client_credentials',
  //you may need to define the oauth scope
  scope: 'https://api.ebay.com/oauth/api_scope'
  }
});

const body = {
  token: 'CfdD9cml4xbioXqAleCchw',
  data: {
    stringShort: 'stringShort',
    stringLong: 'stringLong',
    stringCharacters: 'stringCharacters',
    stringDigits: 'stringDigits',
    stringAlphaNum: 'stringAlphaNum',
    stringWords: 'stringWords'
}};

const GOOGLE_CLIENT_ID= process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    if (profile) {
      user = profile;
      return done(null, user);
      }
      else {
      return done(null, false);
      }
  }
));


// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'],
  prompt: 'select_account' }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback', 
  passport.authenticate('google', { successReturnToOrRedirect: 'http://localhost:3000/home', failureRedirect: '/login' }),
  function(req, res) {
    console.log('in the passport auth')
    return res.status(200).json({
      success:true,
      redirectUrl: 'http://localhost:3000/home'
  })
  });
 */
/*app.post(
  'https://app.fakejson.com/q',
  {json: body},
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
    }
  }
);*/

if (process.env.NODE_ENV === "production") {

  app.use(express.static("build"));


  app.get("*", (req, res) => {
       res.sendFile(path.resolve(__dirname,  "build", "index.html"));
   });

 }

app.post('/search', (req, res) => {
  ebay.getAccessToken()
    .then((data) => {
        ebay.searchItems({
            keyword: 'drone',
            limit: '3'
        }).then((data) => {
            console.log(data);
            // Data is in format of JSON
            // To check the format of Data, Go to this url (https://developer.ebay.com/api-     docs/buy/browse/resources/item_summary/methods/search#w4-w1-w4-SearchforItemsbyKeyword-0)
        })
    });


})


app.get('/hey', (req, res) => {
  console.log("in the hey reqquest")
  res.redirect(200, 'http://localhost:3000/home')
})


app.post('/user', (req, res) => {
  dbHelpers.createUser(req, res)
})

app.get('/allUsers', async (req, res) => {
  await dbHelpers.findAllUsers()
  .then((response) => {
    console.log("in all users then")
    res.send(response)
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));