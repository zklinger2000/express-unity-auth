# azure-express-dev

Starter for developing an Express app with Microsoft Azure's App Service.
It uses an npm script to build using Babel so you can write with the 
latest JavaScript features.
There is a User login example built with Passport that you can use with
CosmosDB to save users, but written using the Mongoose API.

In addition to the Passport login, this app returns a JWT token in the
response to be used when making future requests for secure resources.

### Prerequisites

What things you need to install the software and how to install them
- Nodejs
- MongoDB


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

1. Mention .env file

## Deployment

Add additional notes about how to deploy this on a live system

### Using /logstream
The simplest way to get streaming logs is to use curl, e.g.

```
curl -u {username} https://{sitename}.scm.azurewebsites.net/api/logstream
```

1. Create an App Service on the Nodejs Stack for Linux with local git deployment
1. Add `APP_SECRET` to application settings or the service will run but Passport
will cause a constant `500 Internal Server Error`
1. Go to the app's console

```cmd
https://<your-app-name>.scm.azurewebsites.net
```

1. Go to the menu **Debug Console** -> **SSH**
1. Use `vim` to edit the deploy.sh
1. Remove the `--production` flag from NPM install  
`# 3. Install npm packages`

```cmd
  echo "Running $NPM_CMD install"
```

1. Add these lines after the line `"npm failed"`

```cmd
  echo "Running $NPM_CMD run build"
  eval $NPM_CMD "run build"
  exitWithMessageOnError "build failed"
```


1. Add to git remotes

# Database

1. Setup a CosmosDB
1. TODO: Explain the `MONGODB_URI` application settings.
1. To use Postman and make requests from local dev environment, add your
IP address under the Firewall section in the Azure portal for the CosmosDB

# FTP
```ftps://waws-prod-mwh-007.ftp.azurewebsites.windows.net```

**username must have site name in front!**  
Username: `<app-name>\<deployment username>`

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Contributing


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

UNLICENSED

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
