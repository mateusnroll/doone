class SharingsController extends BaseController {
	index(req, res) {
		super.render('sharings/index', res)
	}
}

module.exports = { SharingsController }
