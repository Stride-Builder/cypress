import {
  getLoginURLAPI,
  getSignupURLAPI,
  getLogoutAPI,
  cleanupSessionAPI,
  getStravaAuthURLAPI,
} from '../../../support/api/authAPI'

describe('Auth API', () => {
  context('GET /api/login', () => {
    it('should return a the login URL', () => {
      getLoginURLAPI().then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('auth_url')
      })
    })
  })
  context('GET /api/signup', () => {
    it('should return a the signup URL', () => {
      getSignupURLAPI().then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('auth_url')
      })
    })
  })
  context('GET /api/strava/authorize', () => {
    it('should return the Strava authorize URL', () => {
      getStravaAuthURLAPI().then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('auth_url')
      })
    })
  })
})
