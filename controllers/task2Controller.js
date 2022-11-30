const controller = {};
const title = 'Jars Savings'; 
const footer = 'Nguyễn Huy Hoàn - 20127166'
const {JarsSaving} = require('../models/data');

controller.showList = (req, res) => {


    // show the salary that has been inputed
    let salary = parseFloat(req.query.salary) | 0;
    let partMoney = [];
    for (let i = 0; i < JarsSaving.length; i++) {
        partMoney.push(salary * JarsSaving[i].devide);
    }
    console.log(partMoney)
    partMoney55 = partMoney[0]
    partMoney10 =  partMoney[1]
    partMoney5 = partMoney[5]
    res.render('task2', {title, footer, partMoney55,partMoney10,partMoney5});
}

module.exports = controller;