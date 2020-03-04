// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/

module.exports = {
  apps: [{
    name: 'WaF Server',
    script: 'dist/index.js',
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      THIS_ENV: 'NONE',

      "PORT": '3000',
      "PUBLIC_JWT_KEY": 'wrong env!',
      "PRIVATE_JWT_KEY": 'wrong env!',
      "clientId": 'wrong env!',
      
      "clientSecret": 'wrong env!',
      "clientSigningSecret": '',
      
      "MONGO_URI": 'wrong env!',
      
      "LOGIN_SUCCESS_REDIRECT_BASE_URL": 'wrong env!',

    },
    env_local: {
      THIS_ENV: 'LOCAL',

      "PORT": '3000',
      
      "MONGO_URI": 'mongodb://127.0.0.1/waf-local',

    },
    env_staging: {
      THIS_ENV: 'STAGING',
      
      "MONGO_URI": 'mongodb://user:password@cluster0-abcdef.mongodb.net:27017/db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
      
      "LOGIN_SUCCESS_REDIRECT_BASE_URL": '',

    },
    env_prod: {
      THIS_ENV: 'PROD',

      "PORT": '3000',
      
      "MONGO_URI": 'mongodb://user:password@cluster0-abcdef.mongodb.net:27017/db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
      
      "LOGIN_SUCCESS_REDIRECT_BASE_URL": '',

    }
  }
  ],
  deploy: {
    prod: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/prod',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env prod'
    }
  }
};
