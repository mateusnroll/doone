const path      = require('path')
const fs        = require('fs')
const camelCase = require('camelcase')

module.exports.init = function() {
	globalizer()
	requireControllers()
	requireModels()
	requireServices()
}

function globalizer() {
	global['rootPath'] = path.dirname(require.main.filename)
	global['appPath'] = `${rootPath}/app`
	global['viewsPath'] = `${rootPath}/app/views`
	global['contorllersPath'] = `${rootPath}/app/controllers`
	global['modelsPath'] = `${rootPath}/app/models`
	global['servicesPath'] = `${rootPath}/app/services`
}

function requireControllers() {
	const { BaseController } = require(`${rootPath}/framework/base_controller`)
	global['BaseController'] = BaseController

	const files = fs.readdirSync(contorllersPath)
	files.forEach(file => {
		const name = camelCase(path.parse(file).name, { pascalCase: true })
		const instance = requireController(file)
		global[name] = instance
	})
}
function requireController(name) {
	const file       = require(`${rootPath}/app/controllers/${name}`)
	const key        = Object.keys(file)[0]
	const controller = file[key]

	return new controller
}

function requireModels() {
	const files = fs.readdirSync(modelsPath)
	files.forEach(file => {
		const name = camelCase(path.parse(file).name, { pascalCase: true })
		const instance = requireModel(file)
		global[name] = instance
	})
}
function requireModel(name) {
	return require(`${rootPath}/app/models/${name}`)
}

function requireServices() {
	const files = fs.readdirSync(servicesPath)
	files.forEach(file => {
		const name = camelCase(path.parse(file).name, { pascalCase: true })
		const instance = requireService(file)
		global[name] = instance
	})
}
function requireService(name) {
	const file       = require(`${rootPath}/app/services/${name}`)
	const key        = Object.keys(file)[0]
	const controller = file[key]

	return new controller
}
