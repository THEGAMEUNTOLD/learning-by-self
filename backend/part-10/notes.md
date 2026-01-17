# Data Association in MongoDB

MongoDB is a NoSQL database, meaning it doesn’t enforce strict tables and joins like relational databases. However, you can associate data in two main ways:

1. Embedding (Denormalization)
2. Referencing (Normalization)


## 1. Embedding (Denormalization

* You store related data inside a document.
* Fast reads because everything is in one document.
* Works best for 1-to-few relationships.

Example: A user with posts embedded

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    posts: [
        {
            postdata: String,
            date: { type: Date, default: Date.now }
        }
    ]
});

const User = mongoose.model('User', userSchema);

// Create a user with posts
const newUser = await User.create({
    username: "Alice",
    email: "alice@example.com",
    posts: [
        { postdata: "Hello World!" },
        { postdata: "Learning MongoDB" }
    ]
});
```

Pros:

* Fast reads, no joins needed.
* Simple queries.

- Cons:

* Updates can be harder if the embedded document grows too big.
* Not suitable for large 1-to-many relationships.

## 2. Referencing (Normalization

* You store related data in separate collections.
* Documents reference each other using ObjectId.
* Works well for 1-to-many or many-to-many relationships.

Example: Users and Posts in separate collections

### User schema

```js
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const User = mongoose.model('User', userSchema);
```

### Post schema

```js
const postSchema = new mongoose.Schema({
    postdata: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);
```

### Creating and associating data

```js
// Create a user
const user = await User.create({ username: "Bob", email: "bob@example.com" });

// Create a post and link to user
const post = await Post.create({ postdata: "My first post", user: user._id });

// Add post to user's posts array
user.posts.push(post._id);
await user.save();
```

### Populating references

```js
const populatedUser = await User.findById(user._id).populate('posts');
console.log(populatedUser);
```

- Pros

* Can handle large 1-to-many and many-to-many relationships.
* Clean separation of data.

- Cons

* Slightly slower reads because `populate()` does an extra query.
* More complex logic.

## Choosing Between Embedding and Referencing

| Aspect           | Embedding                  | Referencing                     |
| ---------------- | -------------------------- | ------------------------------- |
| Relationship     | 1-to-few                   | 1-to-many or many-to-many       |
| Read performance | Fast (all data in one doc) | Slower (requires populate)      |
| Write complexity | Simple                     | More complex                    |
| Storage size     | Can grow large             | Efficient for many related docs |
| Example          | Blog comments inside post  | Posts collection linked to user |
