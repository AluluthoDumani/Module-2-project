import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT


const app =express()
app.use(cors())

app.use(express.json())
// path + imported file
//app.use()

app.listen(PORT,()=>{
    console.log('http://localhost:' + PORT);
    
})
