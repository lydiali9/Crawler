/*const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://mys4s.cn/static/vio/index.html#/?carno=%E7%B2%A4AB14Y3&vin=052240&engine=492885&car_type=52');
  await page.screenshot({path: 'puppeteer.png'});
await page.pdf({path: 'puppeteer.pdf', format: 'A4'});
console.log(page);

  await browser.close();
})();*/

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log(1111111111111);
  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    console.log(45646546456464);
    console.log(12313213);
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });
  console.log(33333333333);
  console.log('Dimensions:', dimensions);

  await browser.close();
})();
/*
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://mys4s.cn/static/vio/index.html#/?carno=%E7%B2%A4AB14Y3&vin=052240&engine=492885&car_type=52');
  const html = await page.content();
  console.log(html);
  browser.close();
})()*/

/*(
  () => {
  puppeteer.launch()
    .then(browser => {
      browser.newPage()
        .then(page => page.goto("https://mys4s.cn/static/vio/index.html#/?carno=%E7%B2%A4AB14Y3&vin=052240&engine=492885&car_type=52"))
        .then(page => {
            let html = page.content();
            console.log(html);
            //resolve(html);
        })
        .then(() => browser.close())
  })
}
  () => {

    puppeteer.launch().then(async browser => {
            const page = await browser.newPage();
            // await page.emulate(iPhone);
            await page.goto(url);
            // other actions...
            let html = await page.content();
            console.log(html);
            await browser.close();
        })
}
)()*/


/*const puppeteer = require('puppeteer');

(async () => {
    let url = 'https://mys4s.cn/static/vio/index.html#/?carno=%E7%B2%A4AB14Y3&vin=052240&engine=492885&car_type=52';

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle0'});
    const html = await page.content(); // serialized HTML of page DOM.
    await browser.close();
    return html;
})()*/

/*const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('http://books.toscrape.com/');
    await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img');
    await page.waitFor(1000);

    const result = await page.evaluate(() => {
        let title = document.querySelector('h1').innerText;
        let price = document.querySelector('.price_color').innerText;

        return {
            title,
            price
        }

    });

    browser.close();
    return result;
    };

scrape().then((value) => {
    console.log(value); // Success!
});*/