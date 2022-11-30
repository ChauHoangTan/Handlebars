const controller = {};
const title = 'Jars Savings'; 
const {JarsSaving} = require('../models/data');

controller.showList = (req, res) => {
    let devide = JarsSaving.filter(item => item.devide == devide);
    // show the salary that has been inputed
    let salary = req.query.salary;
    let partMoney = [];
    for (let i = 0; i < devide.length; i++) {
        partMoney.push(salary * devide[i]);
    }
    res.render('task2', {title, JarsSaving, partMoney});
}

module.exports = controller;