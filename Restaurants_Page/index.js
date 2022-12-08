const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express() // express comes with great stuff like use, get, listen
const cors = require('cors')
app.use(cors())

// axios works by passing through the url and visits the url and gets the response from it
const imageLink1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWDuu5Y_Tkj__svbytdiv0VhJeu98nfN0LQ&usqp=CAU'
const imageLink2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBYQDDwEnNhV2WvHezJmt9p1V_fPNZVHsGw&usqp=CAU'
const urlMani1 = 'https://www.tripadvisor.in/Restaurants-g737163-Manipal_Udupi_District_Karnataka.html'
const urlMani2 = 'https://www.eazydiner.com/manipal/restaurants'
const urlmang1 = 'https://www.eazydiner.com/mangalore/restaurants'
const urlmang2 = 'https://www.eazydiner.com/mangalore/restaurants?total=12&page=2'
const urlBang1 = 'https://www.dineout.co.in/bangalore-restaurants'
const urlBang2 = 'https://www.dineout.co.in/bangalore-restaurants?p=2'
const Manipalloc = 'Manipal'


//app.METHOD(PATH, HANDLER)

app.get('/',function(req,res){
    res.json('This is my webScraper')
})

app.get('/results1', function(req,res){
    // now that we passed the url, we need some chaining
    axios(urlMani1)
        .then(response => {
            const html = response.data
            //console.log(html)
            const $ = cheerio.load(html)
            const articleM = []
            $('.YHnoF', html).each(function() {
                const Mtitle = $(this).find('div.RfBGI > span > a.Cj').text()
                const Murl = $(this).find('div.RfBGI > span > a.Cj').attr('href')
                const Mreviews = $(this).find('span.IiChw').text()
                const Mcuisine = $(this).find('div.bAdrM > span.qAvoV > span.ABgbd').text()
                const Mdesc1 = $(this).find('div.wZfxE > span > a.fnrKq > span').text()
                const Mdesc2 = $(this).find('div.zEqVH > span > a.fnrKq > span').text()
                
                articleM.push({
                    Mtitle,
                    Murl,
                    Mreviews,
                    Mcuisine,
                    Mdesc1,
                    Mdesc2,
                    imageLink1,
                    Manipalloc
                })
            })
            //console.log(articleM)
            res.json(articleM)
        }).catch(err => console.log(err))

})

app.get('/results2', function(req,res){
    // now that we passed the url, we need some chaining
    axios(urlMani2)
        .then(response => {
            const html = response.data
            //console.log(html)
            const $ = cheerio.load(html)
            const articlem = []
            $('.restaurant', html).each(function() {
                const mimageurl = $(this).find('div.grid > div.w-2-12 > a.apxor_click > div.img1-5 > img.res_name').attr('data-src')
                const mtitle = $(this).find('h3.res_name').text()
                const murl = $(this).find('div.grid > a.block').attr('href')
                const mrating = $(this).find('span.critic').text()
                const mcuisine = $(this).find('.res_cuisine').text()
                const mlocation = $(this).find('h3.res_loc').text()
                const mmenuurl = $(this).find('a.menu').attr('href')
                const mmapurl = $(this).find('a.map').attr('href')
                const mbooktableurl = $(this).find('a.btn-primary').attr('href')  
                
                articlem.push({
                    mimageurl,
                    mtitle,
                    murl,
                    mrating,
                    mcuisine,
                    mlocation,
                    mmenuurl,
                    mmapurl,
                    mbooktableurl
                })
            })
            //console.log(articlem)
            res.json(articlem)
        }).catch(err => console.log(err))

})

app.get('/results3', function(req,res){
    // now that we passed the url, we need some chaining
    axios(urlmang1)
        .then(response => {
            const html = response.data
            //console.log(html)
            const $ = cheerio.load(html)
            const articlem = []
            $('.restaurant', html).each(function() {
                const mimageurl = $(this).find('div.grid > div.w-2-12 > a.apxor_click > div.img1-5 > img.res_name').attr('data-src')
                const mtitle = $(this).find('h3.res_name').text()
                const murl = $(this).find('div.grid > a.block').attr('href')
                const mrating = $(this).find('span.critic').text()
                const mcuisine = $(this).find('.res_cuisine').text()
                const mlocation = $(this).find('h3.res_loc').text()
                const mmenuurl = $(this).find('a.menu').attr('href')
                const mmapurl = $(this).find('a.map').attr('href')
                const mbooktableurl = $(this).find('a.btn-primary').attr('href')  
                
                articlem.push({
                    mimageurl,
                    mtitle,
                    murl,
                    mrating,
                    mcuisine,
                    mlocation,
                    mmenuurl,
                    mmapurl,
                    mbooktableurl
                })
            })
            //console.log(articlem)
            res.json(articlem)
        }).catch(err => console.log(err))

})

app.get('/results4', function(req,res){
    // now that we passed the url, we need some chaining
    axios(urlmang2)
        .then(response => {
            const html = response.data
            //console.log(html)
            const $ = cheerio.load(html)
            const articlem = []
            $('.restaurant', html).each(function() {
                const mimageurl = $(this).find('div.grid > div.w-2-12 > a.apxor_click > div.img1-5 > img.res_name').attr('data-src')
                const mtitle = $(this).find('h3.res_name').text()
                const murl = $(this).find('div.grid > a.block').attr('href')
                const mrating = $(this).find('span.critic').text()
                const mcuisine = $(this).find('.res_cuisine').text()
                const mlocation = $(this).find('h3.res_loc').text()
                const mmenuurl = $(this).find('a.menu').attr('href')
                const mmapurl = $(this).find('a.map').attr('href')
                const mbooktableurl = $(this).find('a.btn-primary').attr('href')  
                
                articlem.push({
                    mimageurl,
                    mtitle,
                    murl,
                    mrating,
                    mcuisine,
                    mlocation,
                    mmenuurl,
                    mmapurl,
                    mbooktableurl,
                    imageLink2
                })
            })
            //console.log(articlem)
            res.json(articlem)
        }).catch(err => console.log(err))

})

app.get('/results5', function(req,res){
    // now that we passed the url, we need some chaining
    axios(urlBang1)
        .then(response => {
            const html = response.data
            //console.log(html)
            const $ = cheerio.load(html)
            const articlem = []
            $('.restaurant', html).each(function() {
                const bimageurl = $(this).find('div.img > img.no-img').attr('data-src')
                const btitle = $(this).find('a.restnt-name').text()
                const burl = $(this).find('a.restnt-name').attr('href')
                const brating = $(this).find('div.img-wrap > div.rating-4').text()
                const bcuisine = $(this).find('span.double-line-ellipsis').text()
                const blocation = $(this).find('div.restnt-info > div > a').text()
                
                articlem.push({
                    bimageurl,
                    btitle,
                    burl,
                    brating,
                    bcuisine,
                    blocation,
                })
            })
            //console.log(articlem)
            res.json(articlem)
        }).catch(err => console.log(err))

})

app.get('/results6', function(req,res){
    // now that we passed the url, we need some chaining
    axios(urlBang2)
        .then(response => {
            const html = response.data
            //console.log(html)
            const $ = cheerio.load(html)
            const articlem = []
            $('.restaurant', html).each(function() {
                const bimageurl = $(this).find('div.img > img.no-img').attr('data-src')
                const btitle = $(this).find('a.restnt-name').text()
                const burl = $(this).find('a.restnt-name').attr('href')
                const brating = $(this).find('div.img-wrap > div.rating-4').text()
                const bcuisine = $(this).find('span.double-line-ellipsis').text()
                const blocation = $(this).find('div.restnt-info > div > a').text()
                
                articlem.push({
                    bimageurl,
                    btitle,
                    burl,
                    brating,
                    bcuisine,
                    blocation,
                })
            })
            //console.log(articlem)
            res.json(articlem)
        }).catch(err => console.log(err))

})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))   
