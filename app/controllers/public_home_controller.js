class PublicHomeController extends BaseController {
	index(req, res) {
		super.render('public_home/index', res)
	}
}

module.exports = { PublicHomeController }
