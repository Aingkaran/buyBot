const puppeteer = require("puppeteer")
console.log('hello')
const product_url = "https://takomogolf.com/iron-101/"

const givePage = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    return page;
}

const addToCart = async (page) => {
    await page.goto(product_url);
    await page.evaluate(() => document.querySelector('#hand option[value="Left"]').selected = true);
    await page.evaluate(() => document.querySelector('#shaft option[value="KBS Max Stiff"]').selected = true);
    await page.waitForTimeout(2000);
    await page.waitForSelector("button[class='single_add_to_cart_button button alt']");
    await page.evaluate(() => document.getElementsByClassName('single_add_to_cart_button button alt')[0].click());
    await page.waitForNavigation();

}

const checkout = async () => {
    let page = await givePage();
    addToCart(page);
}

checkout()

