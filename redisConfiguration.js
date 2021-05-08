const Redis = require("ioredis");
const redis = new Redis();

redis.on("error", function(error) {
  console.error(error);
});

module.exports = redis