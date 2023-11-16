const router = require('express').Router();
const {catagory_drop_down_controller} = require('../../controllers/DropDown/CatagoryDropDown.controller')
//drop down Data
router.get('/catagory-drop-down-controller' ,catagory_drop_down_controller)


module.exports = router;
