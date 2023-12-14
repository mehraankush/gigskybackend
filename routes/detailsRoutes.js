const express =require('express');
const detailsRoutes = express.Router();
const { tokenCheck }= require('../middlewares/authMiddleware');

const userApp = express();

const authMiddleware= require('../middlewares/authMiddleware');

const bodyParser = require('body-parser');
userApp.use(bodyParser.json());
userApp.use(bodyParser.urlencoded({extended:true}));


const detailsController = require ('../controllers/detailsController')
detailsRoutes.route('/createdetails').post(tokenCheck, detailsController.createDetails);
detailsRoutes.route('/checkdetails/:UPI_ID').get(detailsController.checkDetails);

module.exports = detailsRoutes;