const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://sabaatta997:saba2917atta@cluster-saba.xrpzxfx.mongodb.net/SGP-saba";

const dbconnect = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Database is connected");
    const dbName = mongoose.connection.db.databaseName;
    console.log("Connected to database:", dbName);

    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    const numberOfCollections = collections.length;
    console.log("Number of collections in the database:", numberOfCollections);

    // Now you can access the "food_items" collection
    const foodItemsCollection = mongoose.connection.db.collection("food_items");
    const data = await foodItemsCollection.find({}).toArray();

    console.log("Data from the 'food_items' collection:", data);

    const collectionsdb = await mongoose.connection.db
      .listCollections()
      .toArray();

    console.log("Collections in the database:");
    collectionsdb.forEach((collection) => {
      console.log(collection.name);
    });

    // Close the MongoDB connection
    // await mongoose.connection.close();
    // console.log("Connection closed");
  } catch (e) {
    console.log("Error:", e);
  }
};





// try {
//   // Connect to MongoDB
//   await mongoose.connect(mongoURL);
//   console.log("Database is connected");

//   // Get the name of the connected database
//   const dbName = mongoose.connection.db.databaseName;
//   console.log("Connected to database:", dbName);

//   // Retrieve a single document from the 'food_items' collection
//   const foodItemsCollection = mongoose.connection.db.collection("food_items");
//   const singleData = await foodItemsCollection.findOne({ /* your query criteria here */ });

//   console.log("Single document from the 'food_items' collection:", singleData);

//   // Close the MongoDB connection when done
//   await mongoose.connection.close();
//   console.log("Connection closed");
// } catch (e) {
//   console.log("Error:", e);
// }
// };







module.exports = dbconnect;
