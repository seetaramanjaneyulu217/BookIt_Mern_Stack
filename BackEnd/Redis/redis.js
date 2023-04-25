// const redisClient = redis.createClient({
//   host: "localhost", // Redis server hostname
//   port: 6379, // Redis server port
//   password: "yourpassword", // Redis server password (if required)
// });
// const redisClient = redis.createClient({
//   password: "<password>",
//   socket: {
//     host: "redis-10340.c258.us-east-1-4.ec2.cloud.redislabs.com",
//     port: 10340,
//   },
// });

// import { createClient } from "redis";
const redis = require("redis");

const redisClient = redis.createClient({
  password: "Tacew6B0ZXttgJTPdqFhjzpxwsENjb6V",
  socket: {
    host: "redis-10340.c258.us-east-1-4.ec2.cloud.redislabs.com",
    port: 10340,
  },
});
console.log(redisClient.connect()); // false

// Log a message when the Redis client successfully connects
redisClient.on("connect", () => {
  console.log("Redis client connected");
});

// Log an error message if the Redis client encounters an error
redisClient.on("error", (err) => {
  console.error("Redis client error:", err);
});

module.exports = redisClient;
