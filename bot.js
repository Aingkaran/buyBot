const puppeteer = require("puppeteer")
console.log('hello')
const product_url= "https://www.nike.com/ca/t/air-jordan-1-mid-shoes-f8W9ns/DQ8426-517"

const givePage=async ()=>{
    const browser = await puppeteer.launch({headless: false});
    const page= await browser.newPage();
    return page;
}

const addToCart= async (page)=>{
    await page.goto(product_url);
    await page.waitForSelector("label[for='skuAndSize__28644620']")
    await page.click("label[for='skuAndSize__28644620']", elem=>elem.click())

    await page.waitForSelector("button[class='ncss-btn-primary-dark btn-lg add-to-cart-btn']");
    await page.evaluate(()=>document.getElementsByClassName('ncss-btn-primary-dark btn-lg add-to-cart-btn')[0].click())
    await page.waitForSelector("button[class='ncss-btn-primary-dark btn-lg mr3-sm css-1n4ymyz']");
    await page.evaluate(()=>document.getElementsByClassName('ncss-btn-primary-dark btn-lg mr3-sm css-1n4ymyz')[0].click());

}

const checkout= async()=>{
    let page = await givePage();
    addToCart(page);
}

checkout()

