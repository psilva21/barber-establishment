import mongoose from 'mongoose';
const { 
    MONGO_DB_URI_PROTOCOL,
    MONGO_DB_URI,
    MONGO_DB_PORT,
    MONGO_DB_NAME,
} = process.env

const uri = `${MONGO_DB_URI_PROTOCOL}://${MONGO_DB_URI}:${MONGO_DB_PORT}`

mongoose.connect(uri, { dbName: MONGO_DB_NAME })

mongoose.connection.once('error', () => {
    console.log('connection with mongoDB failed')

    process.exit(1)
})

mongoose.connection.once('connected', () => {
    console.log('connected with mongoDB')
})

export default mongoose