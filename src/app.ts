import express from 'express'
import { routes } from './Routes'
import './config/db'
const app = express()

app.use(express.json())
app.use(routes)



app.listen(3333, () => console.log('Listen port 3333'))