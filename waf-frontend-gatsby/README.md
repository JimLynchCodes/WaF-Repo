
# WaF Frontend
Source code for the With A Friend App frontend webapp: withafriend.io (not yet live).

# Usage

Use node v12.14.1
```
nvm use
```

Install `gatsby` and `yarn` cli tools:
```
npm i -g gatsby
npm i -g yarn
```

Install dependencies:
```
yarn install
```

Run locally (with hot module reloading!)

```
yarn start
```

Then visit the local site at http://localhost:8000


Create local build
```
npm run build
```

Serve local build

```
npm run serve
```

Run Unit Tests (TDD watch-mode style)

```
npm test
```

Run Unit Tests (Single run for CI and with code coverage output)

```
npm run test-once
```

Run BDD / E2e Tests (Locally With UI)

```
npm run e2e
```

Run BDD / E2e Tests (Headless Mode for CI):

```
node_modules/.bin/cypress run
```

Run linting (calls both prettier linting and tslint)

```
npm run lint
```

Deploy

```
npx gatsby deploy
```



# Scaffolding

This project was proudly scaffolded from the [Gatsby-Starter-TypeScript-Redux-TDD-BDD Starter Template](https://github.com/Evaluates2/Gatsby-Starter-TypeScript-Redux-TDD-BDD).


# Env Vars

Duplicate `.sample.env` and enter the appropriate values for each environment:
```
.env.local
.env.dev
.env.staging
.env.production
```

To use an environment specific .env file, start the server prefixed with `NODE_ENV=<envivonment>`. (See the current start command in package.json)

# More Secrets
For more secret values and URLs please see Jim's Google doc, "Server Locations".