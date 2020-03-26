const Redis = require("ioredis");
const subscriber = new Redis();
const publisher = require('./publisher');

subscriber.subscribe("init");
subscriber.on("message", function(channel, message) {
  console.log(channel, message);
  switch (channel) {
    case "init":
      publisher();
      break;
    default:
  }
});


module.exports = subscriber;