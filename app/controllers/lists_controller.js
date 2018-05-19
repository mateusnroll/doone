class ListsController extends BaseController {
	index(req, res) {
		console.log(req.session.id)
		super.render('lists/index', res)
	}
}

module.exports = { ListsController }
