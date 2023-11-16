const router = require('express').Router();
const { adminLoginController } = require('../../controllers/Auth_User/login.controller');
const { registerController } = require('../../controllers/Auth_User/register.controller');
const { getUserDataController } = require('../../controllers/Auth_User/userdata.controller');
const conn = require('../../app/models/dbConnection')

const { ImageUploadController } = require('../../controllers/Image_Upload_CkEditor/ImageUpload.controller')

//thumbnail image
const { thumbNail_Image_Upload_Controller } = require('../../controllers/thumb_nail_img/thumbNailImg.controller')
const { upload } = require('../../controllers/thumb_nail_img/thumbNailImg.controller')


//blog catagory
const { ViewBlogCatagoryController } = require('../../controllers/Blog_Catagory/ViewBlogCatagory.controller')
const { add_blog_catagory_controller } = require('../../controllers/Blog_Catagory/AddBlogCatagory.controller')
const { update_blog_catagory_controller } = require('../../controllers/Blog_Catagory/UpdateBlogCatagory.controller')
const { delete_blog_catagory_controller } = require('../../controllers/Blog_Catagory/DeleteBlogCatagory.controller')

//blog management
const { update_blog_controller } = require('../../controllers/Blog_management/update_blog.controller');
const { delete_blog_controller } = require('../../controllers/Blog_management/delete_blog.controller');
const { catagory_drop_down_controller } = require('../../controllers/DropDown/CatagoryDropDown.controller');

//view All User Blog
const { viewAllUsersBlogController } = require('../../controllers/View_All_User/View_all_userBlog.Controller')
const { viewAllUsersBlogControllerNextPage } = require('../../controllers/View_All_User/View_all_userBlog.Controller')
const { getTotalDataCount } = require('../../controllers/View_All_User/View_all_userBlog.Controller')

//search blog data controller
const { searchBlogDataController } = require('../../controllers/Search_Blog_Data/SearchBlogData.Controller')
const { UpdateBlogDataController } = require('../../controllers/Search_Blog_Data/UpdataBlogData.Controller')

const { userAllBlogWithIdController } = require('../../controllers/User_All_blog_id/userAllBlogWithId.controller');
const { userMainBlogWithIdController } = require('../../controllers/User_All_blog_id/UserMainBlogController');

const { sortBlogDataByCatagory,
    sortBlogDataByCatagoryNextPage,
    getTotalDataCountInCatagorySort} = require('../../controllers/catagory_sort/catagory_sort.controller')

const multiparty = require('connect-multiparty');
const MuiltiPartyMiddleware = multiparty({ uploadDir: "./images" });

//get total-user-list-admin-panal
const { get_user_list_controller } = require('../../controllers/Admin_panal/UserList/UserList')
const { getUserBlogDataByIdController } = require('../../controllers/Admin_panal/GetUserBlogId/GetUserBlogId.controller')
const { add_msg_controller } = require('../../controllers/Admin_panal/msgSend/msg.controller')
const { chatMessageDataController } = require('../../controllers/Admin_panal/chat/msgData.controller')
const { updateBlogStatusController } = require('../../controllers/Admin_panal/UpdateStatus/UpdateStatus.controller')
const { viewAllUsersBlogControllerAdmin,
    viewAllUsersBlogControllerNextPageAdmin } = require('../../controllers/Admin_panal/ViewAllUsers/ViewAllUsers')
const { adminLoginControllerAtAdminSide } = require('../../controllers/Admin_panal/AdminLogin/AdminLogin.controller')

router.get('/get-user-list', get_user_list_controller)
router.post('/get-user-blog-data-by-id', getUserBlogDataByIdController)
router.post('/send-messages', add_msg_controller)
router.post('/chat-data', chatMessageDataController)
router.post('/update-blog-status', updateBlogStatusController)

router.get('/view-all-user-blog-controller-admin', viewAllUsersBlogControllerAdmin)
router.post('/view-all-user-blog-controller-next-page-admin', viewAllUsersBlogControllerNextPageAdmin)

router.post('/admin-side-login', adminLoginControllerAtAdminSide);


//login User API
router.post('/auth-registration', registerController);
router.post('/admin-login', adminLoginController);
router.get('/home', getUserDataController);
// router.post('/admin-logout' ,adminLogoutController)

//upload image in ckeditor
router.post('/upload', MuiltiPartyMiddleware, ImageUploadController)

//blog management api's
router.post('/blog-management-update-blog', upload.single('file'), update_blog_controller)
router.post('/blog-management-delete-blog', delete_blog_controller)
//create blog
router.post('/upload-thumb-nail-image', upload.single('file'), thumbNail_Image_Upload_Controller)

//blog catagory api's
router.get('/blog-catagory-view-blog', ViewBlogCatagoryController)
router.post('/blog-catagory-add-blog', add_blog_catagory_controller)
router.post('/blog-catagory-update-blog/:id', update_blog_catagory_controller)
router.post('/blog-catagory-delete-blog', delete_blog_catagory_controller)

//drop down Data
router.get('/catagory-drop-down-controller', catagory_drop_down_controller)

//view All User Blog
router.get('/view-all-user-blog-controller', viewAllUsersBlogController)
router.post('/view-all-user-blog-controller-next-page', viewAllUsersBlogControllerNextPage)
router.get('/get-total-data-count', getTotalDataCount)


//get user all blog at home page of body
router.post('/all-blog-with-id-controller', userAllBlogWithIdController)
router.post('/main-blog-with-id-controller', userMainBlogWithIdController)

//search blog data
router.get('/search-blog-data-controller', searchBlogDataController)
router.get('/update-blog-data-controller', UpdateBlogDataController)

//sort data by blog catagory
router.post('/sort-data-by-catagory', sortBlogDataByCatagory)
router.post('/sort-data-by-catagory-next-page',sortBlogDataByCatagoryNextPage)
router.post('/get-count-sort-data-by-catagory',getTotalDataCountInCatagorySort)

conn.connect()

module.exports = router;
