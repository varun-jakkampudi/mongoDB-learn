const { MongoClient } = require('mongodb');
const URL = 'mongodb+srv://myAtlasDBUser:myatlas-001@myatlasclusteredu.l1f8s.mongodb.net'

const client = new MongoClient(URL);

// database connection
const connectDatabase = async () => {
    try {
        // Use connect method to connect to the server
        await client.connect();
        console.log("Connection Successful");
        client.close(true);
    }
    catch(e) {
        console.error(e)
    }
}

connectDatabase();
