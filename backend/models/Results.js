const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultSchema = new Schema(
    {
        name: { type: String, required: true, unique: false },
        topic: { type: String, required: true, unique: false },
        marks_obtained: { type: Number, required: true, unique: false },
        marks_total: { type: Number, required: true, unique: false }
    },
    { database: 'quizapp' },
    { collection: 'result' }
);

module.exports = mongoose.model('result', resultSchema);