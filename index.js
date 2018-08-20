var request = require('request');
var cheerio = require('cheerio');

var url = "https://sp0.baidu.com/9_Q4sjW91Qh3otqbppnN2DJv/pae/channel/data/asyncqury?cb=jQuery110203296765020809558_1524816828824&appid=4001&com=&nu=72509979849&vcode=&token=&_=1524816828827";

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body);
        console.log($);
        debugger;
        var title = $('title').text();
        var content = $('body').text();
        var freeArticles = $('.central-featured-lang.lang1 a small').text()

        console.log('URL: ' + url);
        console.log('Title: ' + title);
        console.log('EN articles: ' + freeArticles);
    } else {
        console.log("We’ve encountered an error: " + error);
    }
});