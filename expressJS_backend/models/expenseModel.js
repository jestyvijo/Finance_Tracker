const mongoose = require('mongoose');

var Budget = mongoose.model('Budget', {
    income: { type: Number },
    expense_budget: { type: Number },
    saving: { type: Number },
    investment: { type: Number },
    daily_expense: { type: Number },
    date:{type: String},
    month: { type: Number },
});

module.exports = { Budget };