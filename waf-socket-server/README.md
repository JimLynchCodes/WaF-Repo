# WaF Server

This is the backend server side for WaF app based on SocketIo.

# Usage

use node v12.14.1
```
nvm use
```

install deps:
```
npm i
```

run locally:
```
npm start
```

_note: we haven't yet setup hot reloading for the backend server project_

run unit tests:
```
npm test
```


# Deploying multiple environments

Because I'm cheap, in the beginning we will just have prod:

ec2 page: https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#Instances:sort=instanceId

aws jim - check the server location's doc


# Mongo Locations
Because I'm cheap we are just using different databases for each environment within the same mongo cluster.

jim@wis mongo account.

Live Environment Database names:

- waf-dev
- waf-staging
- waf-production

Local database name:

- waf-local

# Collections
Each environment will have the same set of collections:

- users
- listings
- messages

# Local Mongo Setup
Download the latest [mongoDb with brew](https://github.com/mongodb/homebrew-brew).

start mongo with:
```
brew services start mongodb-community
```

to check if it's running:
```
brew services list
```

to stop brew mongo:
```
brew services stop mongodb-community
```

to connect via mongo shell:
```
mongo
```

Once in the mongo shell, see all your databases:
```
show dbs
```

to create a fresh db name "waf-local" with the three collections pre-seeded with some data:
```
./recreate-seeded-local-db.sh
```

# A Nice Local Mongo GUI

...

