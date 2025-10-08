const mongoose = require('mongoose');

const dailyLogSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  status: {
    type: String,
    enum: ['Delivered', 'Damaged', 'Not Delivered'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

const DailyLog = mongoose.model('DailyLog', dailyLogSchema);

module.exports = DailyLog;
