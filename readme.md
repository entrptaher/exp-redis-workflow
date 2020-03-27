A small overkill demonstration of server and scraper with ioredis, bull queue and so on instead of websocket/rest api. Everything is connected via redis.

# Development
This assumes you have nodejs, yarn and redis-server installed.

```
yarn
yarn start
```

# Workflow

## Birds eye view:
![Imgur](https://i.imgur.com/R4rChEU.png)

## A deep drive of the listeners:
![](https://i.imgur.com/lYnWHmP.png)
