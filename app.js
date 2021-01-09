// Making HTTP Request
const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=7b0bba52cbb3d7bdfa8c4c27b1ecdf0f&query=27.2046,77.4977'

// request ({url}, (error,response) =>{
// // console.log(response.body)

// // Error bec. data is in JSON Formate ==> console.log(response.body.location.name)

// // Parsing
// const data = JSON.parse(response.body)
// console.log(data.location.name)
// })

// Parsing using json:true
// request ({url , json:true}, (error,response) => {
//     console.log(response.body.location.country)
//     console.log(response.body.location.name)
//     console.log(response.body.location.region)
// })

// Error handling
request ({url , json:true}, (error,response) => {
    if (error){
        console.log('Error occured')
    }
    else if(response.body.error){
        console.log('Unable to find location')
    }
    else {
        console.log(response.body.location.name)
    }
})
