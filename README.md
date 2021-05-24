# Wandering WV

This is an app to compile places of interest (POIs) in West Virginia, USA. When a place is listed in the database, it gets listed on the front page. When a user clicks the title, they are routed to a showcase page for that POI. The showcase contains the content from the author as well as photos stored on Cloudinary.

The Google Maps API is embedded for each POI show page. The title of the POI is parsed to a search string at render, which is then passed to the embedded iframe html, and Google Maps returns a custom map for that location. 

Also included on the front page is a county listing so users can simply click a county name to find POIs in that area.

## What it includes

* Authentication
* Database with places and comments models
* Seeded starter data
* API implementation

### User Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Places Model

|Column Name | Data Type |
| ---------------- | --------------- |
| id | Integer |
| title | Text |
| content | Text |
| countyName | Text|
| categoryName | Text |
| image | Text |
| image2 | Text |
| image3 | Text |
| image4 | Text |
| image 5 | Text |
| image 6 | Text | 
| createdAt | Date | 
| updatedAt | Date |


### Default Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | / | server.js | Home page |
| GET | /auth/login | auth.js | Login form |
| GET | /auth/signup | auth.js | Signup form |
| POST | /auth/login | auth.js | Login user |
| POST | /auth/signup | auth.js | Creates User |
| GET | /auth/logout | auth.js | Removes session info |
| GET | /profile | server.js | Regular User Profile |
| GET | /new | places.js | Create new place/post |
| GET | /:id | places.js | Show individual place |
| POST | / | comment.js | Create new comment |
| GET | /:id | comment.js | Edit comment |
| PUT | /:id | comment.js | Post edited comment |
| DELETE | /:id | comment.js | Delete comment | 
| GET | /:countyName | county.js | Lists places in chosen county |


## `1` Fork & Clone Project & Install Dependencies
`1` The first thing that we are going to do is `fork` and `clone`

`2` Now we are going to install the current dependencies that are listed inside of `package.json`
```text
npm install
```

`3` We need to install some packages that will be used for `authentication`. Those are the following packages:

```text
npm install bcrypt connect-flash passport passport-local express-session method-override
```
-  [bcrypt](https://www.npmjs.com/package/bcrypt): A library to help you hash passwords. ( [wikipedia](https://en.wikipedia.org/wiki/Bcrypt) ) 
    - Blowfish has a 64-bit block size and a variable key length from 32 bits up to 448 bits.
- [connect-flash](https://github.com/jaredhanson/connect-flash): The flash is an area of the session used for storing messages that will be used to to display to the user. Flash is typically used with redirects.
- [passport](https://www.passportjs.org/docs/): Passport is authentication middleware for Node.js. It is designed to do one thing authenticate requests. There are over 500+ strategies used to authenticate a user; however, we will be using one - *passport-local* Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests
- [passport-local](http://www.passportjs.org/packages/passport-local/): The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which accepts these credentials and calls done providing a user. [passport-local](http://www.passportjs.org/packages/passport-local/)
- [express-session](https://github.com/expressjs/session): Create a session middleware with given *options*.
- [method-override](https://github.com/expressjs/method-override): Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

`4` Make a commit

```text
git add .
git commit -m "Install dependencies for project"
```

## `2` Create Database & Update Config

`1` Create database `wandering_dev`

```text
createdb wandering_dev
```

`2` Update **`config.json`** file with the following:

```json
{
  "development": {
    "database": "wandering_dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "wandering_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "wandering_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

## `3` Analyze File Structure

```text
├── config
│   └── config.json
├── controllers
│   └── auth.js
├── models
│   └── index.js
├── node_modules
│   └── ...
├── public
│   └── assets
│   └── css
│       └── style.css
├── test
│   └── auth.test.js
│   └── index.test.js
│   └── profile.test.js
│   └── user.test.js
├── views
│   └── auth
│       └── login.ejs
│       └── signup.ejs
|   └── comments
|       └── edit.ejs
|   └── county
|       └── show.ejs
|   └── main
|       └── 404.ejs
|   └── partials
|       └── alerts.ejs
|   └── places
|       └── new.ejs
|       └── show.ejs
│   └── index.ejs
│   └── layout.ejs
│   └── profile.ejs
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── server.js
```

- `config.json`: Where you need to configure your project to interact with your postgres database.
- `controllers`: The folder where all of your controllers ( routes ) will go to control the logic of your app.
- `models`: The folder where all the models will be stored that will interact with the database.
- `node_modules`: The folder that is generated by **npm** that stores the source code for all dependencies installed.
- `public`: is to have those views that would be publicly accessible in the application. ex. `style.css`
- `test`: The folder where all your test that you make will be stored. ex. `auth.test.js`
- `views`: The folder where all the app's templates will be stored for displaying pages to the user. ex. `login.ejs`
- `.gitignore`: A hidden file that will hide and prevent any files with to NOT get pushed to Github.
- `package-lock.json`: is automatically generated for any operations where npm modifies either the `node_modules` tree, or `package.json`.
- `package.json`: The settings file that stores scripts and list of dependencies that are used inside your app.
- `README.md`: The main markdown file that written to explain the details your app.
- `server.js`: The main file that controls the entire application.

## `4` Set secret Session
In your `.env` file, create a variable `SECRET_SESSION=YourSecretHere`

## `5` Get API Working

You'll need to visit [Google Maps](https://developers.google.com/maps) and follow the steps to get an API key. Store that information as API_KEY in your `.env` file. The scripts will automatically parse place titles to search strings, and those will be passed to the Express pages. 

## `6` Set up data

Use `sequelize db:migrate` to create the models necessary. Starter data is included in the seeders folder. Run `sequelize db:seed:all` to populate the models and make the app work. 

## `7` Launch and Debug

As beautifully as it's running as I write this, it will absolutely have bugs if relaunched in another environment. Use `npm start` to launch the app, open your localhost:3000, and start happily debugging. 