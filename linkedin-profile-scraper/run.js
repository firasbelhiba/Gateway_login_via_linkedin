const { LinkedInProfileScraper } = require('linkedin-profile-scraper');
const fs = require('fs');

const func = (async () => {
    console.log('scrapper is executing');

    const scraper = new LinkedInProfileScraper({
        sessionCookieValue: 'AQEDATPI9UsBH5ZSAAABeA4kyjkAAAF4MjFOOU4ApMsDjpG2V5LOSZWJdxB36-eiWVvPgNevIMgMRNn1KF0UYeNQM1nZANJgFKlZ-MJ8DI8o1rmEjyTLbMoMC35yipTznfYHGioTTqJt3daLr0s1tgXI',
        keepAlive: false,
        timeout: 0
    });

    console.log('Setup is exucting');


    await scraper.setup();


    console.log('Result is exucting');

    const result = await scraper.run('https://www.linkedin.com/in/ghada-khedri-540351111/', {
        waitUntil: 'load',
        timeout: 0
    });
    console.log(result)

    let data = JSON.stringify(result)
    fs.writeFileSync('scraped.json', data)
});
func();
