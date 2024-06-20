require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const userData = {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "userId": "123456",  // Replace with a unique identifier for the user
    "isActive": true,
    "preferences": {
      "language": "en",
      "theme": "light"
    },
    "addresses": [
      {
        "type": "home",
        "streetAddress": "123 Main Street",
        "city": "Anytown",
        "state": "CA",
        "postalCode": "12345"
      }
    ]
  }
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req ,res)=>{
res.send("login successfully")
})
app.get('/userdata' ,(req,res) =>{
    res.json(userData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})