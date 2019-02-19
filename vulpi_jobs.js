const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://app.vulpi.com.br/jobs';
const fs = require('fs');
const writeStream = fs.createWriteStream('VagasVulpi.txt');
writeStream.write('Vagas da Vulpi \n');

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(page) {
    return page.click('.btn purple button-filter');
  })
  .then(function(html) {
    $('.content-job', html).each(function() {
      //const vaga = $(this).text();

      //  --Nome do Serviço--

      //console.log($(this).find('h1').text());

      //  --Local do serviço--

      //console.log($(this).find('.location').find('span').eq(0).text());

      //  --Salário--

      //console.log($(this).find('.salary-job').text());
    });
  })
  .catch(function(err) {
    // --Erro--
  });

