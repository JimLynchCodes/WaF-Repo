// This file will nuke the local database and recreate the 3 collections
// for WaF app with some data. This file can be run with this command: 
// mongo localhost:27017/waf-local seed.js

conn = new Mongo();
db = conn.getDB("waf-local");

db.dropDatabase()
db.adminCommand('listDatabases')

db.users.save({ userId: "123" })
db.conversations.save({ conversationId: "123" })
db.listings.save({ listingId: "123" })
