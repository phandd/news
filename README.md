## News
The React app to collect and display news from CNN and The Newyork Times

## Tech stack
- **ReactJs** for Web app
- **create-react-app** for Reactjs app boostraping
- **Less** for CSS preprocessor
- **Docker** for deployment
- **newsapi client** to communicate with newsapi

## Demo
The app is available on heroku server
https://murmuring-taiga-64448.herokuapp.com

## Install locally
If you want to try the app on your local machine, please follow these steps:

### Prerequisites:
- `docker-compose`: If you don't have `docker-compose` on your system, checkout the [installation guide](https://docs.docker.com/compose/install/) from Docker. Note that `docker-compose` relies on Docker Engine, so maybe you will need to install Docker also.

- You should not have any service running on port `80` on your system as it's where the frontend app exposed.

### Start the app

To boostrap and run the app, navigating to the source code directory and simply run:
```
docker-compose up
```

the app should be available on `http://localhost` in a short time, after `docker-compose` make it's job done by bringing up all the services.

After reviewing the app, you can graceful shutdown all services by running:
```
docker-compose down --rmi 'all'
```

If you have any problem on starting the app, please contact me via Skype id: `live:dangdphan`.

## Deploy to heroku
1. install [heroku cli](https://devcenter.heroku.com/articles/heroku-cli)
2. Navigate to source code directory and run:
```
heroku create
```
3. After step 2, a heroku git remote repository is associated with the local repository, to deploy, simply push the code to the heroku remote:
```
git push heroku deploy:master
```
The app should be available on the app url provided by heroku ([heroku doc](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)).

**Note:** If you have any update from `master` branch, remember to rebase the `deploy` branch onto `master` branch before deploying the code.

Thank you for your time!

Dang Dien PHAN