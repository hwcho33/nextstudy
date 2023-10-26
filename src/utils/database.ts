import { MongoClient } from 'mongodb'

let connectDB: Promise<MongoClient>
interface OverridingGlobalType extends Global {
  _mongo: Promise<MongoClient>
}

declare const global: OverridingGlobalType

export { connectDB }
