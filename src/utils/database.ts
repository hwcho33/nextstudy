import { MongoClient } from 'mongodb'
const url =
  'mongodb+srv://jjou33:O2GMORJcmvKp0ybL@cluster0.yb48xah.mongodb.net/?retryWrites=true&w=majority'

let connectDB: Promise<MongoClient>
interface OverridingGlobalType extends Global {
  _mongo: Promise<MongoClient>
}

declare const global: OverridingGlobalType

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}
export { connectDB }
