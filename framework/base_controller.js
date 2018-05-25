const pug = require('pug')

class BaseController {
	render(view, res, viewData = {}) {
		const file = `${viewsPath}/${view}.pug`
		const compiled = pug.compileFile(file)

		const templateData = {
			currentPath: res.req.path
		}
		const data = Object.assign(viewData, templateData)
		res.send(compiled(data))
	}

	redirect(path, res) {
		res.writeHead(301, { Location: path })
		res.end()
	}
}

module.exports = { BaseController }
