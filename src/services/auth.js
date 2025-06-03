const bcript = require('bcrypt');
const { User } = require('../models/User');

/* const users = {}; */

seed();

async function seed() {
    try {
        await register('peter', '123');
    } catch (err) {
        console.log('Database already seeded');
    }
}
 

async function register(username, password) {
    const existing = await User.findOne({ username });

    if (existing) {
        throw new Error('Username is taken')/* throw прекъсва изпълнението на функцията и затова няма нужда от return */
    };

    const user = new User({
        username,
        hashedPassword: await bcript.hash(password, 10)
    });

    await user.save();

    /* users[username] = user; */

    console.log('Created new user', username);

    return user;
}

async function login(username, password) {
    const user = await User.findOne({ username });

    if (!user || !(await bcript.compare(password, user.hashedPassword))) {
        console.log('Incorrect password for user', username);
        throw new Error('Incorrect username or password');
    };

    console.log('Logged in as', username);

    return user;
};

async function getUserData() {
    return await User.find();
}

module.exports = {
    register,
    login,
    getUserData
}