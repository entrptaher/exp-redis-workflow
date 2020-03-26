const Redis = require("ioredis");

module.exports = () => {
  const publisher = new Redis();
  publisher.publish("newlink", "http://example.com");
}