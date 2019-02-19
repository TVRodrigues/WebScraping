const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('poesias.txt');

writeStream.write('Poesias de Carlos Drummond de Andrade \n');

request('https://pt.wikipedia.org/wiki/Carlos_Drummond_de_Andrade', (error, response, html) => {
	if (error) console.log('Erro: ' + erro);
	if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html);

		$('table > tbody > tr > td > ul').addClass('first').html();
		//console.log($('.first').text());

		
		//$('table > tbody > tr > td > h3').addClass('second').html();

		$('.first').each((i, el) => {
			const nome = $(el).text();
			console.log(nome);
			writeStream.write(`${nome}, \n`);

		});

		console.log('preparando arquivo...');

		//$('.second').each((i, el) => {
			//const nome = $(el).text();
			//console.log(nome);
			//$('.first').each((j, el2) => {
				//const nome2 = $(el2).text();
				//console.log(nome2);
			//});
		//});


		//$('.first').each((i, el) => {
			//const nome = $(el).find('h3').text();
			//console.log(nome);
		//});

		//const siteHeading = $('.TitleUI-sc-1m3ayw0-15 enlQbF TitleH1-c6mv26-0 VyqrE');
		//console.log(siteHeading.html()); 
		//console.log(siteHeading.text());
		//const output = siteHeading.find('h1').text();
		//const output = siteHeading.children('h1').next().text();
		//const output = siteHeading.children('a').parent().text();
		//console.log(output);

		//$('.navbox a').each((i, el) => {
		//	const item = $(el).text();
		//	const link = $(el).attr('href');

		//	console.log(link);
		//});

		//console.log($('h2').text());

		//$('.row product-grid no-gutters main-grid').each(function(index, el) {
		//const nome =$(el).text().find('h1');

		//console.log(nome);
		//});


		//var repete[1000][1000];


		//$('div').each((i, el) => {
		//const title = $(el)
		//.text();

		//});
	}
});