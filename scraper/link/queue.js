const Queue = require("bull");
const scraperQueue = new Queue("scraper");
scraperQueue.process(__dirname + '/process.js');
