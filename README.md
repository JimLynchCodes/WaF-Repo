# WaF-Repo
Mono-repo for the With-A-Friend App!

## [Soon to be] Live Environments

- production: https://webapp.io

- staging: https://aws.123234.cloufront.io

- dev: https://aws.564563.cloufront.io


# Vision



# Concept Art

Initial sketch drawings of the pages in the WaF app. 

<img src="./non-src-images/concept-art/WaF-Concept-Art.png" />


# Architecture

To keep things realtime, most of the data transfer will happen via [socketIo](https://socket.io/docs/) events. Here's a diagram for the inial plan for the events for WaF app. 
_Note: the most up-to-date version of this is [here](https://docs.google.com/drawings/d/1oxLMYoFBzs7PLJfJP0kSswtDAGsNcgwF3tt53YYzvW4/edit?usp=sharing)- ask jim for permissions! :)_ 


<img src="./non-src-images/engineering-diagrams/WaF-App-SocketIO-Message-Structure.png" />


# Code

## Front-End Code

The front-end code is a React webapp build with Gatsby (specifically, the awesome [TDD BDD template from Evaluates2](https://github.com/Evaluates2/Gatsby-Starter-TypeScript-Redux-TDD-BDD)).

_Learn more about the frontend in the README in [waf-frontend-gatsby]()!_

## Back-End Code

The backend is a relatively simple [socket.io](https://socket.io/docs/) server that is just run with `node index.js`. 

_Learn more about the backend in the README in [waf-socket-server]()!_

# Release Plan

// TODO 😅

Basically, we need to set up three environments for dev, staging, and production. Then we can connect them to the CI / CD pipelines for the git branches dev, staging, and master (respectively).

### Releases
1. When features pass all the tests locally and looks good then the code is merged into dev and the ci pipeline deploys to the dev environment. 

2. If all good in the dev environment deployment, we merge the dev branch into staging and let the ci pipeline deploy to the staging environment.

3. If all good in staging, we merge the staging code to the master branch and let the ci pipeline deploy to the production environment.

_When deploying features from staging to production it's nice to leave git release tags as you go!_  