const phantom = require('phantom');
 
(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });
 
  const status = await page.open('https://mys4s.cn/static/vio/index.html#/?carno=%E7%B2%A4AB14Y3&vin=052240&engine=492885&car_type=52');
  const content = await page.property('content');
  console.log(content);
 
  await instance.exit();
})();
