const db = require('../utils/database');


module.exports = {
    all: () => db.load('select * from categories'),
    single: id => db.load(`select * from categories where id = ${id}`),
    //getNameCat: id => db.load(`select name from categories where id = ${id}`),
};