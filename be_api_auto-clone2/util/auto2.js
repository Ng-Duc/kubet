const puppeteer = require('puppeteer-extra')
const { executablePath } = require('puppeteer')

exports.auto2 = async (username, password, proxy, callback) => {
  console.log('proxy', proxy)
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    headless: false,
    args: [
      // '--window-size=1440,900',
      `--proxy-server=http://${proxy}`,
      '--no-sandbox',
    ],
    executablePath: executablePath()
  });
  try {
    const page = await browser.newPage();
    // await page.setViewport({
    //   width: 1920,
    //   height: 1080,
    //   deviceScaleFactor: 1,
    // });
    
    // // Điều hành xóa cache của trang
    // await page.goto('chrome://settings/clearBrowserData');
    // await page.waitForSelector('settings-ui');
    // await page.evaluate(() => {
    //     document.querySelector('settings-ui').shadowRoot.querySelector('#clearBrowsingDataConfirm').click();
    // });

    // // Chờ một thời gian ngắn để xóa cache
    // await page.waitForTimeout(5000); // Chờ 5 giây

    await page.setRequestInterception(true);

    page.on('request', async (interceptedRequest) => {
      const url = interceptedRequest.url();
      // Gửi yêu cầu tiếp tục
      interceptedRequest.continue();

      setTimeout(async () => {
        if (url == "https://nv.ku6110.net/api/Authorize/SignIn") {
          console.log('url', url)
          const response = await interceptedRequest.response();

          // Kiểm tra nếu phản hồi không phải là null trước khi truy cập thuộc tính `status`
          if (response) {
            const status = response.status();
            console.log(`API call to ${url} returned status: ${status}`);
            if (status == 400) {
              callback(false, username)
            } else {
              callback(true, username)
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

    await page.goto('https://nv.ku6110.net/Home/Index');
    await new Promise(resolve => setTimeout(resolve, 5000));
    await page.click('#loginbutton')
    await page.waitForSelector('#accountId');
    await page.type('#accountId', username);
    await page.type('#accountPwd', password);
    await page.click('#signin');

  } catch (error) {
    console.log('error-puppter', error)
    callback(false, username)
    await browser.close();
  }
}