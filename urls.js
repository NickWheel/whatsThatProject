const homeController = require('./controllers/home');
const contactController = require('./controllers/contact');


exports.get = [
    ['/', homeController.index],
    ['/contact', contactController.getContact]
]

exports.post = [
    ['/contact', contactController.postContact]
]