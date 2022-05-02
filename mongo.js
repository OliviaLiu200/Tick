const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://testuser123:"+ process.env.MONGOPASSWORD + "@cluster0.p2nng.mongodb.net/user?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
require('dotenv').config();

console.log(process.env);

async function createData(client, obj){
  try {
    await client.connect();
    const result = await client.db('user').collection('userInfo').insertOne(obj);
  } catch (e) {
    console.log(e);
  } finally {
  chrome.storage.local.set({'userID': result.insertedId});
  await client.close();
  }
}

async function findOneListingByID(client, ID) {
  const result = await client.db('user').collection('userInfo').findOne({_id : ObjectId(ID)});

  if (result) {
    console.log(result);
  } else {
    console.log('no result found');
  }
}


async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

    console.log('databases');
    databasesList.databases.forEach(db => {
      console.log(`- ${db.name}`);
    })

}

//export {client, createData};

// async function main() {

//   try {
//     await client.connect();
//     //await listDatabases(client);
//     //await findOneListingByID(client, '626ed2f9530ce489f2c8a459');
//     // await createData(client, { name: 'test2',
//     //                           hours: 5,
//     //                           email: 'testuser2@gmail.com',
//     //                           friends: []});
//   } catch (e) {
//     console.log(e)
//   } finally {
//     await client.close();
//   }
// }
// main().catch(console.error);