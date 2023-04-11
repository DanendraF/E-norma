const { materies } = require("../models");
const db = require("../models");
const Materi = db.materies;

//Membuat Data
exports.create = async (req, res) =>{
    try{
        const data = await Materi.create(req.body)
        res.json({
            message: "AddMateri",
            data: data,
        })
    }catch (error){
        res.status(500).json({
            message:error.message,
            data: null
        });
    }
}

//Mendapatkan Semua Data
exports.getAll = async (req
    , res) =>{
    try{
        const materies = await Materi.findAll()
        res.json({
            message: "Materi Tampil",
            data: materies,
        });
    }catch (error){
        res.status(500).json({
            message:error.message,
            data: null
        });
    }
}

//Mengupdate Data
exports.update = async (req, res) =>{
    const id = req.params.id
    try{
        const materi = await Materi.findByPk(id, {rejectOnEmpty:true})
        materi.update(req.body,{
            where: {id}
        })
        res.json({
            message: `Data dengan id ${id} berhasil diubah`,
            data: materi,
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}

//Menghapus Data
exports.delete = async (req, res) =>{
    const id = req.params.id
    try{
        const materi = await Materi.findByPk(id, {rejectOnEmpty:true })
        materi.destroy()
        res.json({
            message: "kuis berhasil dihapus",
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}

//Mendapatkan Data Berdasarkan ID
exports.findOne = async (req, res) =>{
    const id = req.params.id
    try{
        const materi = await Materi.findByPk(id, {rejectOnEmpty:ture})
        res.json({
            message: `kuis berhasil ditampilkan dengan id ${id}`,
            data: materi,
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}
