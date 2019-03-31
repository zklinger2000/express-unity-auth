# express-unity-auth
#### Nodejs: `10.15.3`
#### MongoDB: `4.0.2`

# Introduction
Built with ExpressJS, this demos a REST API for a Bearer token based
authentication system integrated with MongoDB.
It uses an npm script to build using Babel so you can write with the 
latest JavaScript features.
The Passport service uses a 'local' username/password strategy, but
can be easily modified to use Google, AWS, etc.
In addition to the Passport login, this app returns a JWT token that
can be saved locally and used when making future requests for secure 
resources.

### Prerequisites

- Nodejs - [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- MongoDB - [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)

## Getting Started

Simply clone the repo and install dependencies.  This will give you
the _back-end_ piece of this **full-stack** project.  
**NOTE**: The _front-end_ client to this is the Unity project here:
[https://github.com/zklinger2000/unity-auth-manager](https://github.com/zklinger2000/unity-auth-manager)


### Installing
```
git clone git@github.com:zklinger2000/express-unity-auth.git
```
```
npm install
```

## Environment Variables

To keep passwords and keys out of the git repo and somewhat safe, we
use a `.env` file that can be read using the `dotenv` library.
In the root of the project directory:
```
touch .env
```
Now fill in the blanks
```
PORT=8050
NODE_ENV=development
MONGODB_URI=mongodb://<username>:<password>@<mongo_address>:<mongo_port>/<db_name>
APP_SECRET=someReallyLongString
```

## Deployment

```
npm run dev:start
```
Add additional notes about how to deploy this on a live system

## Authors

Zachary Klinger

## License

UNLICENSED

## Acknowledgments

Much of this was built upon the techniques learned from Stephen Grider's course on Udemy
