
module.exports = (sequelize, Sequelize) => {
    const Materi = sequelize.define('materi',{
        judul_materi:{
            type: Sequelize.STRING,
        },
        isi_materi:{
            type: Sequelize.TEXT,
        }
    });
    return Materi;

}