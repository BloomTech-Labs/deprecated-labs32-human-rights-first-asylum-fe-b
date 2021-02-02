# Basic SPA

For steps on how to work with this repository [please see here](https://docs.labs.lambdaschool.com/labs-spa-starter/)

🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your first Pull-Request is merged. This is intended to be a guideline. Feel free to add your own flare to it.

# HRF Asylum Tracker

You can find the deployed project hosted on [AWS Amplify](https://b.humanrightsfirstasylum.dev/login).

## Contributors

| Aurelio | Cory | David | Nando | Andre | Jonathan | Mark | Melissa |
|---|---|---|---|---|---|---|---|
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/aurelio4) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Cory-Thomas) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/davidgoldcode) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NandoTheessen) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/andremichalowski) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jonivander) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/slightflow) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/melissa-24) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/aurelio-arcabascio/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/corythomasdev/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/davidigold) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/nandotheessen/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/andre-michalowski/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/j-m-warner/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/mark-pekun/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/melissa-longenberger/)  |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

### Key Features

- Securely login using Okta
- Filter through court decisions by judge name, outcome, etc
- Upload PDFs and load to our backend
- PDFs will be converted to text and populated onto our dashboard
- Invite users onto your team

#### Front end deployed to `AWS Amplify`

#### [Back end](https://github.com/Lambda-School-Labs/human-rights-first-asylum-be-b) built using:

- NodeJS
- Express
- Postgres

<br>

# APIs

## Backend API

* https://asylum-b-api.herokuapp.com/

<br>

# Installation Instructions

- Fork and clone the repo to install it as your own remote.
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local development server.

> The app will run locally on port 3000.  Must be run on port 3000 to be able to log in.

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/human-rights-first-asylum-be-b) for details on the backend of our project.


## What is working/not working as of labs30
1. Login is working well
2. Upload button is in place and styled but not talking to backend.
3. Collections element built and styled

## Accomplished in Labs30
1. Added styling using ant.design to whole site
2. Cleaned up some code
3. Connected the upload button to the main application and built enough that it does show an uploaded file in the model.

## Still needs to be done as of right now
1. Connect upload to backend
2. Connect collections to backend