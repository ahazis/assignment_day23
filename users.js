const express =  require('express')
const app = express()
app.use(express.json())


let data =[

]
console.table(data)

app.get('/api/todos' ,function (req, res) {
    res.send(data)
})

app.post('/api/todos/', (req, res) => {
    const newdata = req.body;
    data.push(newdata);
    res.send("User added successfully");
})

app.listen (3000, function (){
    console.log("server Muhammad Azis berjalan di port 3000")
})

// let data = {
//     1:{
//         text:"olahraga",
//         done: false
//     },
//     2:{
//         text:"go work",
//         done: true
//     }
// }
// console.log(data)

// app.get('/api/todos' ,function (req, res) {
//     res.send(data)
// })

// app.post('/api/todos', (req, res) => {
//     const id = Math.floor(Math.random() * 100)
//     if (Object.entries(req.body).length == 2 && ("text" in req.body) && ("done" in req.body)){
//         data[id] = req.body
//         res.json(data)
//     } else {
//     res.status(400)
//     res.send('Invalid Body')
//     }   
// })

// app.listen(3000)



// latihan mentor
// app.get ('/', function (req, res) {
//         res.send('hallo')
// })

// app.get ('/home/:id', function (req, res) {
//     console.log("path params")
//     console.log(req.params)
//     console.log("query params")
//     console.log(req.query)

//     const filterCategory = req.query.category
//     const filterCity = req.query.city
//     console.log(filterCategory)
//     console.log(filterCity)

//     const id = req.params.id
//     const responseString = 'fetched params' + id
//     res.send('responseString')
// })

// app.listen (3000, function (){
//     console.log("server berjalan di port 3000")
// })