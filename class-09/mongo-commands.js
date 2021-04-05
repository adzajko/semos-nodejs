// {
//     "name": "James",
//     "age": 27,
//     "address": {
//         "city": "London",
//         "street": "Baker Street",
//         "houseNr": 22
//     }
// }

db.users.createIndex({"name": 1})
db.users.getIndexes();
db.users.dropIndexes();

// Create a unique index validator (This will reject any duplicate data on the field the index is located on)
db.users.createIndex({uniqueField: 1}, {unique: true});

// Creating a text index
db.users.createIndex({"login.password": "text"})
// Search using a text index
db.users.find({$text: {$search: "pass"}})
// Sort data found by text index
db.people.find({$text: {$search: "shark"}},{score:{$meta: "textScore"}})
// Search using entire phrases
db.people.find({$text: {$search: "\"nice pineapple\""}})

// Aggregation Framework
db.people.aggregate([
    {$match: {gender: "female"}}, // Stage One: Filter out all documents where gender IS female.
    {$group: { // Stage Two: Group all the results of stage One on a field called totalPeople, grouping them by their location (state)
        _id: {state: "$location.state"}, // _id is MANDATORY, use $ to point to a field rather than a value
        totalPeople: {$sum: 1} // Create the new field and use the sum operator to sum all the people living in the same state
    }},
    {$sort: {totalPeople: -1}}, // Stage Three:  Sort the data from Stage Two in DESCENDING order (-1)
    {$match: {totalPeople: {$gt: 14}}} // Stage Four, Eliminate all the data where the amount of people is less than 14.
]).pretty()

// Aggregation Two
db.people.aggregate([
    // When using the document field as a key DO NOT use $
    // When using the document field as value USE $
    {$match: {'dob.age': { $gte: 64}}}, // Stage One: MATCH: Filter out the data where the field dob.age (date of birth.age) is less than 64
    {$group: { // Stage Two: Group the data by the value in the field gender, 
              // append two additional properties, one that holds a sum of all the people in the group, 
              // and the other that calculates the average age (the value in the field dob.age)
        _id: {gender: '$gender'}, // SELECT * from people WHERE age >= 64 GROUP BY gender <=> Equivalent SQL statement until this point.
        numberOfPeople: {$sum: 1},
        averageAge: {$avg: '$dob.age'}
    }},
    {$sort: {averageAge: 1}} // Stage Three: Sort all the data based on the average age in ASCENDING order
]).pretty()

db.people.aggregate([
    {$project: { // This aggregation has ONE stage, project. Project returns ONLY the defined fields. These fields can be created even if they didnt exist in the original doc.
        _id: 0, // Use 0 to exclude field in final projection
        gender: 1, // Use 1 to include field in final projection. 
        fullName: {$concat: ['$name.first', ' ', '$name.last']} // Create a new field using the values of the documents in thecollection.
    }} // project is an equal operator to SELECT in SQL
]).pretty()