const port = 8002
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app =  express();

// I made use of the UK Guardian newspaper
const url = 'https://www.theguardian.com/uk'
axios(url)
.then(response=>{
    const html = response.data
console.log(html)
    const $ = cheerio.load(html)
    const articles = []

    $('.fc-item__title', html).each(function() {
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        articles.push({
            title,
            url
        })
    })
    console.log(articles)
}).catch(err=>console.log(err))


app.listen(port, ()=>console.log(`Server running on ${port}`))
