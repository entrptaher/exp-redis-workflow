const puppeteer = require("puppeteer");

class Scraper {
  constructor() {
  }
  async init(){
    await this.createBrowser();
  }
  async createBrowser() {
    this.browser = await puppeteer.launch({ headless: true });
  }
  async createPage() {
    const page = await this.browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    return page;
  }
  async scrapeNewLink(url) {
    const page = await this.createPage();
    await page.goto(url);
    await page.close();
  }
}

module.exports = Scraper;
