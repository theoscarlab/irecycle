const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const pageProfile = require('./PageProfile')
const planlist = require('../../planlist')

let fullList = []

let fetchElement = function (page, final) {
  request({
    uri: 'https://www.growthgeeks.com' + page,
    method: 'GET'
  }, function (error, response, body) {
    console.log(response.statusCode)
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(body)
      let element = {
        //Principal
        "image": pageProfile.image($),
        "title": pageProfile.title($),
        "reviews": pageProfile.reviews($),
        "description": pageProfile.description($),
        "expect": pageProfile.expect($),
        "need": pageProfile.need($),
        //stas
        "faq": pageProfile.faq($),
        //2 rectangle info
        "comment": pageProfile.comment($)
      }

      console.dir(element.title)

      fullList.push(element)

      if (final) {
        fs.writeFileSync("elements.json", JSON.stringify(fullList), "utf-8")
      }
    } else {
      console.error("Error on this page: ", 'https://www.growthgeeks.com' + page)
    }
  })
}

let fetchElements = function () {
  request({
    uri: 'http://www.growthgeeks.com/gigs/',
    method: 'GET',
    timeout: 120000
  }, function (error, response, body) {
    console.log(response.statusCode)
    //console.log(body)
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(body)
      $("h4.card__title").each(function (index, e) {
        /* console.log(e)
        console.log(e.innerHTML)
        console.log(this.children[0].data) */
        fullList[index] = { title: e.children[0].data }
      })
      $("p.card__price").each((index, e) => {
        fullList[index].price = e.children[1].data
      })
      $("p.card__description").each((index, e) => {
        fullList[index].description = e.children[0].data
      })
      $("span.card__reviews").each((index, e) => {
        fullList[index].reviews = e.children[0].data
      })
      $("a.card__link").each((index, e) => {
        fullList[index].href = e.attribs.href
        fullList[index].id = e.attribs.href.substr(e.attribs.href.lastIndexOf("/") + 1, e.attribs.href.length)
      })
      fs.writeFileSync("planlist.json", JSON.stringify(fullList), "utf-8")
    } else {
      console.error("Error on this page: ", 'http://www.growthgeeks.com/gigs/')
    }
  })
}

planlist.forEach((element, index) => {
  setTimeout(() => {
    fetchElement(element.href, index == 61)
  }, 1000 * index);
});
