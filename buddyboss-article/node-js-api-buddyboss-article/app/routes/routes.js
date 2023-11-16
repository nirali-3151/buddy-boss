const router = require('express').Router();
const { adminLoginController } = require('../../controllers/Auth_User/login.controller');
const {adminLogoutController} = require('../../controllers/Auth_User/logout.controller');
const {registerController} = require('../../controllers/Auth_User/register.controller');
const {getUserDataController} = require('../../controllers/Auth_User/userdata.controller')

const {ImageUploadController} = require('../../controllers/Image_Upload_CkEditor/ImageUpload.controller')

//blog management 
const {create_blog_controller} = require('../../controllers/Blog_management/create_blog.controller')

//thumbnail image
const {thumbNail_Image_Upload_Controller} = require('../../controllers/thumb_nail_img/thumbNailImg.controller')
const {upload} = require('../../controllers/thumb_nail_img/thumbNailImg.controller')

//blog catagory
const {ViewBlogCatagoryController} = require('../../controllers/Blog_Catagory/ViewBlogCatagory.controller')
const {add_blog_catagory_controller} = require('../../controllers/Blog_Catagory/AddBlogCatagory.controller')
const {update_blog_catagory_controller} = require('../../controllers/Blog_Catagory/UpdateBlogCatagory.controller')
const {delete_blog_catagory_controller} = require('../../controllers/Blog_Catagory/DeleteBlogCatagory.controller')

//blog management
const { view_blog_controller } = require('../../controllers/Blog_management/view_blog.controller');
const { update_blog_controller } = require('../../controllers/Blog_management/update_blog.controller');
const { delete_blog_controller } = require('../../controllers/Blog_management/delete_blog.controller');
const { catagory_drop_down_controller } = require('../../controllers/DropDown/CatagoryDropDown.controller');

//view All User Blog
const {viewAllUsersBlogController} = require('../../controllers/View_All_User/View_all_userBlog.Controller')
const {viewAllUsersBlogControllerNextPage} = require('../../controllers/View_All_User/View_all_userBlog.Controller')

//search blog data controller
const {searchBlogDataController}  = require('../../controllers/Search_Blog_Data/SearchBlogData.Controller')
const {UpdateBlogDataController} = require('../../controllers/Search_Blog_Data/UpdataBlogData.Controller')

const { userAllBlogWithIdController } = require('../../controllers/User_All_blog_id/userAllBlogWithId.controller');
const { userMainBlogWithIdController } = require('../../controllers/User_All_blog_id/UserMainBlogController');

const multiparty = require('connect-multiparty');
const MuiltiPartyMiddleware = multiparty({uploadDir:"./images"});

//login User API
router.post('/auth-registration', registerController);
router.post('/admin-login', adminLoginController);
router.get('/home' ,getUserDataController);
// router.post('/admin-logout' ,adminLogoutController)

//upload image in ckeditor
router.post('/upload' ,MuiltiPartyMiddleware ,ImageUploadController )

//blog management api's
router.get('/blog-management-view-blog',view_blog_controller)
router.post('/blog-management-create-blog' ,create_blog_controller)
router.post('/blog-management-update-blog', upload.single('file') ,update_blog_controller)
router.post('/blog-management-delete-blog' ,delete_blog_controller)
router.post('/upload-thumb-nail-image' , upload.single('file'), thumbNail_Image_Upload_Controller)

//blog catagory api's
router.post('/blog-catagory-view-blog',ViewBlogCatagoryController)
router.post('/blog-catagory-add-blog' ,add_blog_catagory_controller)
router.post('/blog-catagory-update-blog/:id' ,update_blog_catagory_controller)
router.post('/blog-catagory-delete-blog',delete_blog_catagory_controller)

//drop down Data
router.get('/catagory-drop-down-controller' ,catagory_drop_down_controller)

////view All User Blog
router.get('/view-all-user-blog-controller',viewAllUsersBlogController)
router.post('/view-all-user-blog-controller-next-page',viewAllUsersBlogControllerNextPage)

//get user all blog at home page of body
router.post('/all-blog-with-id-controller' ,userAllBlogWithIdController)
router.post('/main-blog-with-id-controller' ,userMainBlogWithIdController)


//search blog data
router.post('/search-blog-data-controller',searchBlogDataController)
router.post('/update-blog-data-controller',UpdateBlogDataController)


module.exports = router;
