const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

let id = 2
const messages = [
    { id: 1, text: 'some message one' },
    { id: 2, text: 'some message two' },
]

app.get('/api/messages', (req, res) => {
    res.json(messages)
})

app.post('/api/messages', (req, res) => {
    const body = req.body
    id++
    const newMessage = {
        id,
        text: body.text
    }
    messages.push(newMessage)
    res.json(newMessage)
})

app.use(express.static(path.join(__dirname, 'client/build')))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(5000, () => {
    console.log('Server say Hi');
})