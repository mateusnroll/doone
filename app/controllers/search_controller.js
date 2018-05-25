class SharingsController extends BaseController {
	index(req, res) {
		super.render('search/index', res)
	}
}

module.exports = { SharingsController }
