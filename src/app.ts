import express from 'express'
import { routes } from './routes'
import './config/db'
const app = express()

app.use(express.json())
app.use('/v1', routes)



app.listen(3333, () => console.log('Listen port 3333'))