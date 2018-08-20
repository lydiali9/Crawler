var https    = require('https');
var fs      = require('fs');
var cheerio = require('cheerio');
var request = require('request');

var url = "https://www.baidu.com/s?wd=72509979849";
//初始url

function fetchPage(url) {
    startRequest(url);
}

function startRequest(url) {
    https.get(url, function (res) {
        var html = '';
        var titles = [];
        res.setEncoding('utf-8');

        res.on('data', function (chunk) {
            html += chunk;
        });

        res.on('end', function () {

            var $ = cheerio.load(html);
            console.log(html);
        });

    }).on('error', function (err) {
        console.log(err);
    });
}
fetchPage(url);