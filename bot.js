const puppeteer = require("puppeteer")
console.log('hello')
const product_url= "https://www.walmart.com/ip/ZINGYOU-BM800-Condenser-Microphone-Bundle-Mic-Kit-for-Studio-Recording-Brocasting/643118590?athbdg=L1600"

const givePage=async ()=>{
    const browser = await puppeteer.launch({headless: false});
    const page= await browser.newPage();
    return page;
}

const addToCart= async (page)=>{
    await page.goto(product_url);
    await page.waitForSelector("button[class='w_hhLG w_8nsR w_jDfj']");
    await page.click("button[class='w_hhLG w_8nsR w_jDfj']", elem => elem.click());
}

const checkout= async()=>{
    let page = await givePage();
    addToCart(page);
}

checkout()

