const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Week8')
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((error) => console.log('MongoDB connection error:', error));

// Define the Person schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    salary: Number,
    city: String
});

// Create the Person model
const Person = mongoose.model('Person', personSchema, 'personCollection');

// Function 1: Insert one person
async function insertOne() {
    const person = new Person({
        name: 'John',
        age: 25,
        gender: 'Male',
        salary: 3000,
        city: 'London'
    });

    await person.save();
    console.log('One person inserted');
}

// Function 2: Insert multiple people
async function insertMany() {
    const people = [
        {
            name: 'Alice',
            age: 32,
            gender: 'Female',
            salary: 4000,
            city: 'London'
        },
        {
            name: 'Bob',
            age: 28,
            gender: 'Male',
            salary: 3500,
            city: 'Manchester'
        },
        {
            name: 'Sarah',
            age: 35,
            gender: 'Female',
            salary: 4500,
            city: 'Birmingham'
        },
        {
            name: 'David',
            age: 42,
            gender: 'Male',
            salary: 5000,
            city: 'London'
        },
        {
            name: 'Emma',
            age: 24,
            gender: 'Female',
            salary: 3200,
            city: 'Manchester'
        }
    ];

    await Person.insertMany(people);
    console.log('Multiple people inserted');
}

// Function 3: Find all people
async function findAll() {
    const people = await Person.find({})
        .sort({ salary: 1 })
        .select('name salary age city')
        .limit(100);

    console.log('\nAll people:');
    people.forEach(person => console.log(person));
}

// Function 4: Find females aged 30 or older
async function findFemalesOver30() {
    const people = await Person.find({
        gender: 'Female',
        age: { $gte: 30 }
    });

    console.log('\nFemales aged 30 or older:');
    people.forEach(person => console.log(person));
}

// Function 5: Count all people
async function countDocuments() {
    const count = await Person.countDocuments({});
    console.log('\nTotal number of people:', count);
}

// Function 6: Update salaries for female employees
async function updateManyPersons() {
    const result = await Person.updateMany(
        { gender: 'Female' },
        { $set: { salary: 5555 } }
    );

    console.log('\nFemale employee salaries updated:', result.modifiedCount);
}

// Function 7: Find people by city
async function findPeopleByCity(selectedCity) {
    const people = await Person.find({ city: selectedCity })
        .select('name age gender salary city')
        .sort({ name: 1 });

    console.log(`\nPeople living in ${selectedCity}:`);

    if (people.length === 0) {
        console.log('No people found in this city.');
    } else {
        people.forEach(person => console.log(person));
    }
}

// Function 8: Delete people aged 45 or older
async function deleteManyPersons() {
    const result = await Person.deleteMany({
        age: { $gte: 45 }
    });

    console.log('\nPeople aged 45 or older deleted:', result.deletedCount);
}

// Main function
async function main() {
    try {
        // Insert sample data
        await insertOne();
        await insertMany();

        // Display and query records
        await findAll();
        await findFemalesOver30();
        await countDocuments();

        // Update female employees' salaries
        await updateManyPersons();

        // Search by city
        await findPeopleByCity('London');

        // Optional: Uncomment the next line only if you want
        // to delete records aged 45 or older.
        // await deleteManyPersons();

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await mongoose.disconnect();
        console.log('\nDisconnected from MongoDB');
    }
}

main();