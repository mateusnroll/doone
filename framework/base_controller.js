const pug = require('pug')

class BaseController {
	render(view, res, data) {
		const file = `${viewsPath}/${view}.pug`
		const compiled = pug.compileFile(file)
		res.send(compiled(data))
	}

	redirect(path, res) {
		res.writeHead(301, { Location: path })
		res.end()
	}
}

module.exports = { BaseController }
