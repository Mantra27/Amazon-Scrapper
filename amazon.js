const puppeteer = require('puppeteer');

    (async () => {

        //enter product name here.....


        let Product = 'asus gaming laptop'


	console.log("Searching for "+`"`+Product+`"`+ ` in Amazon.in........`);
	let launch_options = "{headless: true}"
        let url = 'https://www.amazon.in/s?k=' + Product;
        let browser = await puppeteer.launch(launch_options);
        let page = await browser.newPage();
        page.setDefaultNavigationTimeout(0);
        await page.goto(url);

        let data = await page.evaluate(()=>{
            let Product = document.querySelector("span[class='a-size-medium a-color-base a-text-normal']").innerText
            let currency = document.querySelector("span[class='a-price-symbol']").innerText
            let Pricing = currency + " " + document.querySelector("span[class='a-price-whole']").innerText
            let Rating = document.querySelector("span[class='a-icon-alt']").innerText

                return{
                    Product,
                    Pricing,
                    Rating           
                }
        })

        console.log(data);
        browser.close();

    })();