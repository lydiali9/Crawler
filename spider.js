var express = require('express');
var fs      = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var app     = express();

app.get('/scrape', function(req, res){
    let url = "https://www.baidu.com/s?wd=72509979849";
    request(url, function(error, response, html){

        if(!error){
            var $ = cheerio.load(html);
            console.log(html);
        }
    })
})

app.listen('8081');
exports = module.exports = app;