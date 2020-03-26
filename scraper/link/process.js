const Scraper = require('./scraper');
const handleSubscriber = require('./subscriber');
const publisher = require('./publisher');

async function run(job, done) {
  const scraper = new Scraper();
  await scraper.init();
  await handleSubscriber(scraper);
  await publisher();
}

module.exports = (job, done) => {
  // avoid returning to async and done to work together
  run(job, done);
};
