const uptimeRobotController = (req, res) => {
    return res.status(200).json({ success: true, message: 'Server running' });
};

module.exports = uptimeRobotController;