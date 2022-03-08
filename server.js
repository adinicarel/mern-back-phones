import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
//import mongoose from 'mongoose'
import databaseConfig from './config/database.js'
import router from './routers/phone.route.js' 

dotenv.config()

const app = express()

const dbUrl = "mongodb+srv://adrian:phonebook@phonebook.si5yw.mongodb.net/myPhones?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000

//connecting to mongodb
databaseConfig();

//adding cors
app.use(cors({ origin: true, credentials: true }));

// add the middlewares
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('<h1>Server is up and running</h1>'));

// using the router routes
app.use("/api/phones", router);

// listen
app.listen(
    PORT,
    () => console.log(`server is live on http://localhost:${PORT}`)
)
