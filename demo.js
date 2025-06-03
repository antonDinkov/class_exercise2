const bcrypt = require('bcrypt');

const plainPass = '123';


async function start() {
    const hash = await bcrypt.hash(plainPass, 10);/* 2-ри параметър e salt - колко пъти да джурне паролата - така удължава времето за създаване и пречи на хакери. Общоприето е поне 9 пъти да се салтва */

    const match = await bcrypt.compare(plainPass, hash);
    console.log(hash, match);
};

start(); 