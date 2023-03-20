const express = require('express')
const userRouter = require('./routes/user.router')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000

const app = express()



app.use(express.json());
app.use(express.urlencoded());

app.use('/api', userRouter)







app.listen(PORT, () => {
    console.log(`Server has beeny started on port : ${PORT}`)
})