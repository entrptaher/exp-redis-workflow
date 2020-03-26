const Redis = require("ioredis");

module.exports = function handleSubscriber(scraper) {
  const subscriber = new Redis();

  subscriber.subscribe("newlink");
  subscriber.on("message", function(channel, message) {
    console.log(channel, message);
    switch (channel) {
      case "newlink":
        scraper.scrapeNewLink(message);
        break;
      default:
    }
  });
};
