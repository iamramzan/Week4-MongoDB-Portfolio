## MongoDB and Mongoose: Person Collection

This project demonstrates how to manage and query data using MongoDB and Mongoose with Node.js. It focuses on extending a Person schema by adding a `city` field, inserting records, and retrieving people based on their city. This practical exercise helped me understand how to store, update, and search data in a MongoDB database.

## 🔧 Tools and Technologies Used

- **JavaScript:** Used to write the program and perform database operations.
- **Node.js:** Used to execute the JavaScript code.
- **MongoDB:** Used to store and manage person records.
- **Mongoose:** Used to define the Person schema and interact with the MongoDB database.
- **MongoDB Compass:** Used to view and verify the stored records.

## 💡 How It Works

- **Connect to Database:** Mongoose connects the Node.js application to MongoDB.
- **Define Schema:** The Person schema includes details such as name, age, gender, salary, and city.
- **Insert Records:** The `insertMany()` function adds multiple person records to the collection.
- **Query by City:** The `find()` function retrieves people who belong to a specific city.
- **Verify Results:** The terminal and MongoDB Compass are used to check the query results and stored data.

## 🧩 Main Functions

- **`insertMany()`**: Inserts multiple person records into the collection.
- **`find()`**: Retrieves records that match a specified condition, such as a city.
- **`countDocuments()`**: Counts documents that match a condition.
- **`updateMany()`**: Updates multiple documents that match a condition.
- **`mongoose.connect()`**: Connects the application to the MongoDB database.

## 🎯 Learning Outcomes

Through this project, I learned how to extend a MongoDB schema, insert records containing city information, and query a collection to find people from a specific city. I also gained practical experience using Mongoose and verifying database operations with MongoDB Compass.
