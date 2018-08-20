var request = require('request');
var cheerio = require('cheerio');
var rp = require('request-promise');

var url = "https://www.baidu.com/s?wd=72509979849";
var options = {
    method: "get",
    uri: url,
    body: {
        nu: '72509979849'
    },
    headers: {
        'User-Agent': 'Request-Promise',
        'content-type': 'application/json;charset=UTF-8'
    },
    json: true
}

rp(options)
    .then(function (repos) {
        console.log(repos);
    })
    .catch(function (err) {
        // API call failed...
    });