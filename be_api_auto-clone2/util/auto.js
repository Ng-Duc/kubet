const puppeteer = require('puppeteer-extra')
const { executablePath } = require('puppeteer')

exports.auto = async (username, password, proxy, callback) => {
    console.log('proxy', proxy)
    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        headless: true,
        args: [
            // '--window-size=300,300',
            // `--proxy-server=http://${proxy}`,
            '--no-sandbox',
        ],
        // executablePath: executablePath()
        executablePath: '/usr/bin/chromium-browser'
    });
    try {
        const page = await browser.newPage();
        await page.setRequestInterception(true);

        page.on('request', async (interceptedRequest) => {
            const url = interceptedRequest.url();
            // Gửi yêu cầu tiếp tục
            interceptedRequest.continue();

            setTimeout(async () => {
                if (url == "https://tx.app611.net/LoadData/Pd.ashx") {
                    const response = await interceptedRequest.response();

                    // Kiểm tra nếu phản hồi không phải là null trước khi truy cập thuộc tính `status`
                    if (response) {
                        const status = response.status();
                        console.log(`API call to ${url} returned status: ${status}`);
                        if (status == 200) {
                            callback(true, username)
                        } else {
                            callback(false, username)
                        }
                        await browser.close();
                    } else {
                        console.log(`No response received for API call to ${url}`);
                        await browser.close();
                    }

                }
            }, 1000)
            // Gửi các cuộc gọi API đến máy chủ để xử lý
        });

        await page.goto('https://tx.app611.net/index.aspx');
        await page.waitForSelector('#txtUser');
        await page.type('#txtUser', username);
        await page.type('#txtPassword', password);
        // await page.$eval('#txtUser', el => el.value = "username");
        // await page.$eval('#txtPassword', el => el.value = "password");
        await page.click('.btn_signIn');

    } catch (error) {
        console.log('error-puppter', error)
        callback(false, username)
        await browser.close();
    }
}