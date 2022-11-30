const controller = {};

const {zodiacs} =  require('../models/data');

const title = 'Zodiac Characteristics'
const footer = 'Châu Hoàng Tấn - 20127621'

controller.showList = (req, res) => {
    res.render('task4', {title, zodiacs, footer})
}

controller.showDetails = (req, res) =>{
    let name = req.params.name
    let selectedZodiacs = zodiacs.filter(item => item.name == name)
    res.render('task4-details',{title, selectedZodiacs, footer})
  
}

module.exports = controller