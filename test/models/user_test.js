const expect = require('chai').expect
const User = require('../../app/models/user')

describe('User', () => {
    it('should be a valid model', done => {
        const user = new User({ email: 'a@b.com', password: '123' })
        const validation = user.validateSync()

        expect(validation).to.be.undefined
        done()
    })

    it('should be invalid without email', done => {
        const user = new User({ password: 'abc' })
        const validation = user.validateSync()

        expect(validation.errors.email).to.exist
        done()
    })

    it('should be invalid wihtout password', done => {
        const user = new User({ email: 'a@b.com' })
        const validation = user.validateSync()

        expect(validation.errors.password).to.exist
        done()
    })
})
