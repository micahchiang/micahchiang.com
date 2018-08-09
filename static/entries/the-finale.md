# WildrookProto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Running this Application

There are two ways to run this application:

1.) After cloning, run `npm install` or `yarn` to install the dependencies for this project.

2.) Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. This is a dev build and reloads automatically upon changes.

3.) If you have docker, you can run `docker-compose up -d`. Navigating to `localhost:8080` will allow you to access a production
build of this application.

4.) A NOTE ON CORS: Because the angular-cli has cors built into the dev server it uses, you should run into no problems accessing the data
from the provided api endpoint. Should you choose to use the production build in docker, you may run into an error involving CORS.
Since this is just a prototype application, the quickest way to solve this is by installing [this chrome extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi),
[this firefox extension](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/), and in Safari, disabling the cors policy in the develop menu.
