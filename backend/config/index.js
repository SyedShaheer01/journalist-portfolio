import mongoose from 'mongoose'
import "dotenv/config.js"

mongoose.connect(`${process.env.DB_URL}`)

export default mongoose




