const pug = require('pug')

class BaseController {
	render(view, res, data) {
		const file = `${viewsPath}/${view}.pug`
		const compiled = pug.compileFile(file)
		res.send(compiled(data))
	}
}

module.exports = { BaseController }
