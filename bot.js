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
    await page.waitForTimeout(3000);
    await page.waitForSelector("button[class='single_add_to_cart_button button alt']");
    await page.evaluate(() => document.getElementsByClassName('single_add_to_cart_button button alt')[0].click());
    await page.waitForSelector("a[class='checkout-button button alt wc-forward']");
    await page.evaluate(() => document.getElementsByClassName('checkout-button button alt wc-forward')[0].click());

}

const fillBilling = async (page) => {
    await page.waitForSelector("input[id='billing_first_name']");
    await page.type("input[id='billing_first_name']", 'Aingkaran')
    await page.type("input[id='billing_last_name']", 'Jegatheeswaran')
    await page.type("input[id='billing_address_1']", '18 hoyle dr')
    await page.type("input[id='billing_city']", 'Brampton')
    await page.type("input[id='billing_postcode']", 'L6P 1J4')
    await page.type("input[id='billing_phone']", '647-462-0039')
    await page.type("input[id='billing_email']", 'aingkaran1995@gmail.com')
    // await page.waitForSelector("span[class='select2-selection__arrow']");
    // await page.evaluate(() => document.getElementsByClassName('select2-selection__arrow')[0].click());
    // await page.waitForSelector("input[class='select2-search__field']");
    // await page.type("input[id='select2-search__field']", 'Ontario')

}

const checkout = async () => {
    let page = await givePage();
    addToCart(page);
    fillBilling(page)
}

checkout()

