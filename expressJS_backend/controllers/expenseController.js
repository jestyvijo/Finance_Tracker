var express=require('express');
var route=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Budget } = require('../models/expenseModel');

var cmonth=new Date().getMonth()
route.post('/', (req, res) => {
    var day=new Date().getDate()
    var month=new Date().getMonth()
    var month1=parseInt(month)+parseInt(1)
    var year=new Date().getFullYear()
    date1= year+"-"+0+month1+"-"+day
    var bud = new Budget({
        income: req.body.income,
        expense_budget: req.body.expense_budget,
        saving: req.body.saving,
        investment: req.body.investment,
        daily_expense:0,
        date: date1,
        month: month1
    });
    bud.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Budget :' + JSON.stringify(err, undefined, 2)); }
    });
});

route.get('/', (req, res) => {
    var month=new Date().getMonth()
    var month1=parseInt(month)+parseInt(1)
    Budget.find({month:month1},(err, docs) => {
        if (!err) { 
            res.send(docs); }
        else { console.log('Error in Retriving Register :' + JSON.stringify(err, undefined, 2)); }
    });
   
});

route.put('/:id', (req, res) => {
    console.log("server")
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
    Budget.find(
        {_id: req.params.id},
        (err,docs)=>{
            if(!err){
                a=docs
                dd=a[0].daily_expense
                data=JSON.stringify(dd)
            }
        }
    )
    balance_budget=req.body.expense_budget-req.body.daily_expense
var emp = {
        expense_budget: balance_budget,
        daily_expense:parseInt(data)+parseInt(req.body.daily_expense),
    };
    Budget.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Budget Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

route.get('/:date', (req, res) => {
    var date1=req.params.date
    Budget.find({date:date1.toString()},(err, docs) => {
        if (!err) { 
            res.send(docs); }
        else { console.log('Error in Retriving Register :' + JSON.stringify(err, undefined, 2)); }
    });
  
});
module.exports=route
