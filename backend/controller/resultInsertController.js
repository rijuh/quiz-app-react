const Results = require('../models/Results');

const resultInsertController = async (req, res) => {
    try {
        const { name, topic, marks_obtained, marks_total } = req.body;

        // NEW RESULT OBJECT
        const newResult = new Results({
            name: name,
            topic: topic,
            marks_obtained: marks_obtained,
            marks_total: marks_total
        });

        // INSERTING THE RESULT
        await newResult.save();
        console.log("Result inserted ", newResult);
        return res.status(201).json({ success: true, message: "Result inserted", newResult });
    } catch (error) {
        console.error("Internal server error ", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = resultInsertController;