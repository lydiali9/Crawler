/*var webPage = require('webpage');
var page = webPage.create();

var fs = require('fs');
var path = 'techstars.html'

page.open('https://mys4s.cn/static/vio/index.html#/?carno=%E7%B2%A4AB14Y3&vin=052240&engine=492885&car_type=52', function (status) {
  var content = page.content; 
console.log(content);
  phantom.exit();
});*/


console.log('Loading a web page');
var page = require('webpage').create();
var url = 'https://mys4s.cn/static/vio/index.html#/?carno=%E7%B2%A4AB14Y3&vin=052240&engine=492885&car_type=52';
page.open(url, function (status) {
  console.log('Page loaded');
  page.render('wikipedia.org.png');
var content = page.content; 
console.log(content);
  phantom.exit();
});
