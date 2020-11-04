const homeController = require('./controllers/home');
const contactController = require('./controllers/contact');


exports.urls = [
    ['/', homeController.index],
    ['/contact', contactController.getContact],
]