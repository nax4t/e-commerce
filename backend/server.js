import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
const app = express()
const port = process.env.PORT

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// cookie parser middleware
app.use(cookieParser())

connectDB()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`API is running on Port=${port}`))
