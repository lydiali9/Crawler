/*console.log('Loading a web page');
var page = require('webpage').create();
var url = 'https://www.baidu.com/s?wd=72509979849';
page.open(url, function (status) {
  //Page is loaded!
  console.log(page.content);
  phantom.exit();
});*/

/*const phantom = require('phantom');

(function() {
  const instance = phantom.create();
  const page = instance.createPage();
  page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });
 
  const status = page.open('https://www.baidu.com/s?wd=72509979849');
  const content = page.property('content');
  console.log(content);
 
  instance.exit();
})();*/

var phantom = require('phantom');
var _ph, _page, _outObj;

phantom
  .create()
  .then(ph => {
    _ph = ph;
    return _ph.createPage();
  })
  .then(page => {
    _page = page;
    // return _page.open('https://www.npmjs.com/package/phantom');
    return _page.open('https://www.baidu.com/s?wd=72509979849');
  })
  .then(status => {
    console.log(status);
    return _page.property('content');
  })
  .then(content => {
    console.log(content);
    _page.close();
    setTimeout(() => {
        _ph.exit();
    }, 1000);
  })
  .catch(e => console.log(e));