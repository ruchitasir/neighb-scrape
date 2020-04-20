let request = require('request')
let cheerio = require('cheerio')

request('http://visitseattle.org/things-to-do/neighborhoods/',(error,response,body)=>{
   let $ = cheerio.load(body)
    
    let neighborhoods = $('.info-window-content').map((index,element)=>{
            return{
                name: $(element).find('h4').text(),
                link: $(element).find('a').attr('href'),
                description: $(element).find('p').text(),
                image:$(element).find('div').attr('style'),
                image1:$(element).find('.info-window-content-image').attr('style')
            }
        }).get()
        
    neighborhoods.forEach(n=>{
    if(n.image){
    n.image = n.image.slice(23,-2)
    }
    })
    console.log(neighborhoods)
})