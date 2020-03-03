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
- conversations

# Local Mongo Setup
Download the latest [mongoDb with brew](https://github.com/mongodb/homebrew-brew).

To install:
```
brew tap mongodb/brew
brew install mongodb-community@4.2
```

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
It can be very pleasant to have a nice graphical client for visualizing the data in your mongo collections. For this project we like to use [Robo3t](https://robomongo.org/).

If you've ever used "MySQL Workbench", this is basically a similar program but for Mongo.

Either Robo3T or Studio3T will work fine.

## Local DB Robo 3T Setup

- Choose "Create" connection
- For type, choose "Direct Connection"
- Name: WaF Local
- Address: localhost 27017


You can run the database seeding script to create the proper database, collections, and fill them with some sample data:
```
mongo localhost:27017/waf-local seed.js
```


## Atlas DB Robo 3T Setup

- Choose "Create" connection
- For type, choose "Replica Set"
- Name: WaF Production
- In the field with palceholder "Import connection details..." enter the mongo srv string.

eg:
```
mongodb+srv://AdminJim:<password>@cluster0-xahr1.mongodb.net/test
```

- then click "From SRV", hit "Save", and then "Connect".

# Pm2
This project uses the pm2 library, a process manager for node.js projects. It has a few nice features including automatically restarting your node process whenever it crashes which is great for when you want that (usually the case for backends hosted live). 

The environment variables are also loaded through pm2 using the `ecosystem.config.js` file. The environment is chosen by passing in the environment for the value of the `--env` flag when running pm2.

create a file called "ecosystem.js", and inside of it put this:
```

```
