db.collectionOne.insertOne({
  name: 'James',
  isAdmin: false,
  age: 27,
  timestmp: new Timestamp(),
  born: new Date(),
  address: {
    city: 'Veles',
    number: 88
  },
  favoriteMovies: ['Die Hard', 'Edge of Tomorrow', 'Twilight']
});

db.collectionOne.insertOne({
  name: 'Borat',
  posts: ['p3']
});

db.posts.insertOne({
  _id: 'p3',
  title: 'Post Three'
});

db.collectionOne.aggregate([
  {
    $lookup: {
      from: 'posts',
      localField: 'posts',
      foreignField: '_id',
      as: 'joinedPosts'
    }
  }
]);

db.createCollection('heroes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'weapon', 'gender', 'age'],
      properties: {
        name: {
          bsonType: 'string',
          description: 'Field must not be empty and is required'
        },
        gender: {
          bsonType: 'string',
          description: 'Field must not be empty.'
        },
        weapon: {
          bsonType: 'string',
          description: 'Field must not be empty.'
        },
        age: {
          bsonType: 'int',
          description: 'The Age of the Hero!'
        }
      }
    }
  }
});

db.heroes.insertOne({
  name: 'Goran Pandev',
  gender: 'male',
  weapon: 'Skopsko Pivo',
  age: NumberInt(38)
});

db.runCommand({ collMod: 'heroes', validationAction: 'error' });

db.heroes.insertMany([
  {
    name: 'Mirana',
    gender: 'Female',
    weapon: 'Bow and Arrow',
    age: NumberInt(26)
  },
  {
    name: 'Darius',
    gender: 'Male',
    weapon: 'Axe',
    age: NumberInt(36)
  },
  {
    name: 'Widowmaker',
    gender: 'Female',
    weapon: 'Sniper rifle',
    age: NumberInt(29)
  },
  {
    name: 'Illidan Stormbreaker',
    gender: 'Demon',
    weapon: 'Glaives',
    age: NumberInt(4)
  }
]);

db.heroes.find({}).pretty();
