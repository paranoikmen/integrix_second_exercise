const express = require('express')
const userRouter = require('./routes/user.routes')
const cors = require('cors');

const app = express()
const port = 4000

app.use(express.json())
app.use(cors({origin: "http://localhost:3000", credentials: true}))
app.use('/api', userRouter)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})