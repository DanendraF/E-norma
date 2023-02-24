const db = require("../models");
const Quiz = db.quizzes;

//Create : Menambahlan data kedalam tabel quiz
exports.create = async (req, res) => {

    try{
        const data = await Quiz.create(req.body)
        res.json({
            message:"quiz created successfully.",
            data: data,
        })
    }catch (error) {
        res.status(500).json({
            message: error.message ,
            data: null,
        });
    }
}

//Read : Menampilkan atau Mengambil semua data quiz di database
exports.getAll = async(req, res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes retrieved successfully.",
            data: quizzes,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

//Mengubah Data sesuai id yang dikirimkan
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quizzes updated successfully.",
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retrieving quiz",
            data: null,
        });
    }
}

//Menghapus data sesuai id yang dikirimkan
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectoryOnEmpty: true })

        quiz.destroy()

        res.json({
            message: "Quiz deleted successfully."
        });
    } catch (error) {
        res.status(500).json ({
            message: error.message || "Some error occured while retrieving quiz",
            data: null,
        });
    }
}

//Mengambil atau menampilkan data yang sesuai id yang dikirimkan
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectoryOnEmpty: true})
        res.json({
            message: `Quizzes retrivied succesfully with id=$(id).`,
            data: quiz,
        });
    }catch (error) {
        res.status(500).json({
            message: error.message || "some error occurred while retrieving quiz",
            data: null,
        });
    }
};

//Menampilkan atau mengambil semua data quiz berdasarkan category tertentu
exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            categoryId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with category id=${id}.`,
        data: quizzes,
    });
}

//Menampilkan atau mengambil semua data quiz berdasarkan level tertentu
exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            levelId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with levelId = ${id}.`,
        data: quizzes,
    });
}