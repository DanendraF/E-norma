const dbConfig = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acqueire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
    });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//define semua models yang ada di aplikasi
db.quizzes = require('./quiz')(sequelize, Sequelize);
db.materies = require('./materi')(sequelize, Sequelize);
module.exports=db;