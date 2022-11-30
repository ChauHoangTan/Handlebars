const controller = {};
const {emotions} = require('../models/data');
const Title = 'Inspiring Quotes';
const footer = "Ngô Anh Vũ - 20127669"

controller.showDefault = (req, res) => {
    let title = req.query.title;
    let selectedEquotions = emotions.filter(item => item.title == title);

    let quotePath = selectedEquotions.length
        ? selectedEquotions[0].quotePath
        : 'images/task1/default.jpg';

    res.render('task1', {Title, footer, emotions, quotePath});
}

module.exports = controller;