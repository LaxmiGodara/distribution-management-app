const DailyLog = require('../models/DailyLog');

const createDailyLog = async (req, res) => {
  try {
    const { customer, status, date } = req.body;
    if (!customer || !status || !date) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const newLog = new DailyLog({ customer, status, date });
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating log entry', error });
  }
};

module.exports = {
  createDailyLog,
};
