class ListsController extends BaseController {
	index(req, res) {
		console.log(req.user)
		console.log(req.currentSession)
		super.render('lists/index', res)
	}
}

module.exports = { ListsController }
