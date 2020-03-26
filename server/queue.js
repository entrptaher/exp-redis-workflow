const Queue = require("bull");
require('./subscriber');

const scraperQueue = new Queue("scraper");
scraperQueue.add().then(()=>{
  console.log('added')
});