const {uri} = require('../secrets/mongoDB.config')
const {settings, MongoClient, ObjectId, shadowDB} = require('../settings/Settings.js');



  function getSingleProductMongoDB (productId, singleProduct) {

    MongoClient.connect(uri, settings, (error, client) => {
      if(error) { throw error }

	  let collection = client.db('shadowDB').collection('games');
      collection.find({_id: ObjectId(`${productId}`)}).toArray((error, response) => {
        if(error) { throw error }

        singleProduct(response)
        client.close()
      })

    })
}


module.exports = { getSingleProductMongoDB }
