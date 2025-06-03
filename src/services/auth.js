const bcript = require('bcrypt');

const users = {};

register('peter', '123');

async function register(username, password) {
    if (users[username]) {
        throw new Error('Username is taken')/* throw прекъсва изпълнението на функцията и затова няма нужда от return */
    };

    const user = {
        username,
        hashedPassword: await bcript.hash(password, 10)
    };

    users[username] = user;

    console.log('Created new user', username);

    return user;
}

async function login(username, password) {
    const user = users[username];
    if (!user || !(await bcript.compare(password, user.hashedPassword))) {
        console.log('Incorrect password for user', username);
        throw new Error('Incorrect username or password');
    };

    console.log('Logged in as', username);

    return user;
};

function getUserData() {
    return users;
}

module.exports = {
    register,
    login,
    getUserData
}