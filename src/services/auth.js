const users = {
    'peter': {
        username: 'peter',
        password: '123'
    }
};

function register(username, password) {
    if (users[username]) {
        throw new Error('Username is taken')/* throw прекъсва изпълнението на функцията и затова няма нужда от return */
    };

    const user = {
        username,
        password
    };

    users[username] = user;

    console.log('Created new user', username);

    return user;
}

function login(username, password) {
    const user = users[username];
    if (!user || user.password != password) {
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