const Redis = require("ioredis");

module.exports = () => {
  const publisher = new Redis();
  publisher.publish("init", "");
}  
