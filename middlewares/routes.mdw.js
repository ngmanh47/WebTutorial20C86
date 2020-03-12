
module.exports = function (app) {

	// admin
	//app.use('/admin', require('../routes/admin/admin.route'));

	// user
	app.use('/', require('../routes/user/home.route'))
	app.use('/categories', require('../routes/user/category.route'))
	app.use('/products', require('../routes/user/product.route'))
	app.use('/contact', require('../routes/user/contact.route'))
};