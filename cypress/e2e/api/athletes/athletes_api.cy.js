import {
  getAthleteAPI,
  createAthleteAPI,
  updateAthleteAPI,
} from '../../../support/api/athleteAPI'

describe('Athletes API', () => {
  before(() => {
    cy.login('stridebuilder+qa@gmail.com')

    // Reset the test user's profile to default values
    updateAthleteAPI({ name: 'QA User', privacy: false, coach: true })
  })

  beforeEach(() => {
    cy.login('stridebuilder+qa@gmail.com')
  })

  after(() => {
    updateAthleteAPI({ name: 'QA User', privacy: false, coach: true }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })

  context('GET /api/athlete', () => {
    it('should return the current authenticated athlete', () => {
      getAthleteAPI().then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('success', true)
        expect(response.body).to.have.property('data')
        expect(response.body.data).to.have.property('_id').and.to.be.a('number')
        expect(response.body.data).to.have.property('name').and.to.be.a('string')
        expect(response.body.data).to.have.property('email').and.to.be.a('string')
        expect(response.body.data).to.have.property('picture').and.to.be.a('string')
        expect(response.body.data).to.have.property('privacy').and.to.be.a('boolean')
        expect(response.body.data).to.have.property('status').and.to.be.a('string')
        expect(response.body.data).to.have.property('createdAt').and.to.be.a('string')
        expect(response.body.data).to.have.property('updatedAt').and.to.be.a('string')
        expect(response.body.data).to.have.property('connections').and.to.be.an('array')
        expect(response.body.data).to.have.property('coach').and.to.be.a('boolean')
      })
    })
  })

  context('POST /api/athlete', () => {
    it('should create a new athlete', () => {
      createAthleteAPI({}, {}).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('success', true)
        expect(response.body).to.have.property('data')
        expect(response.body.data).to.have.property('_id').and.to.be.a('number')
        expect(response.body.data).to.have.property('name').and.to.be.a('string')
        expect(response.body.data).to.have.property('email').and.to.be.a('string')
        expect(response.body.data).to.have.property('picture').and.to.be.a('string')
        expect(response.body.data).to.have.property('privacy').and.to.be.a('boolean')
        expect(response.body.data).to.have.property('status').and.to.be.a('string')
        expect(response.body.data).to.have.property('createdAt').and.to.be.a('string')
        expect(response.body.data).to.have.property('updatedAt').and.to.be.a('string')
        expect(response.body.data).to.have.property('connections').and.to.be.an('array')
        expect(response.body.data).to.have.property('coach').and.to.be.a('boolean')
      })
    })
  })
  context('PUT /api/athlete', () => {
    it('should update the current authenticated athlete\'s name', () => {
      updateAthleteAPI({ name: 'John Doe' }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('success', true)
        expect(response.body.data).to.have.property('name').and.to.equal('John Doe')
      })
    })
    it('should update the current authenticated athlete\'s privacy setting', () => {
      updateAthleteAPI({ privacy: true }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('success', true)
        expect(response.body.data).to.have.property('privacy').and.to.equal(true)
      })
    })
    it('should update the current authenticated athlete\'s coach setting', () => {
      updateAthleteAPI({ coach: true }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('success', true)
        expect(response.body.data).to.have.property('coach').and.to.equal(true)
      })
      updateAthleteAPI({ coach: false }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('success', true)
        expect(response.body.data).to.have.property('coach').and.to.equal(false)
      })
    })
  })
})
