const sg= require('./Sendgrid')
try {
  
  sg.joven("odtorres891118@gmail.com", "Oscar")
} catch (error) {
  console.log(error)
}