const db = require('../utils/database');

module.exports = {
    all: () => db.load('select * from products'),
    single: id => db.load(`select * from products where id = ${id}`),
    allByCat: id_cat => db.load(`select * from products where id_cat = ${id_cat} and status = 1`),
    newArrivals: () => db.load('select * from products limit 10'),
};