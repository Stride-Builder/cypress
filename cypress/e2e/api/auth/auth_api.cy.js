import { 
  getLoginURLAPI,
  getSignupURLAPI,
  getLogoutAPI,
  cleanupSessionAPI,
  getStravaAuthURLAPI,
} from '../../../support/api/authAPI'

describe('Auth API', () => {
  context('GET /api/auth/login', () => {
    it('should return a the auth URL', () => {
      getLoginURLAPI().then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('auth_url')
      })
    })
  })
  context('GET /api/auth/signup', () => {
    it('should return a the auth signup URL', () => {
      getSignupURLAPI().then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('auth_url')
      })
    })
  })
  context('GET /api/auth/logout', () => {
    it('should return a the logout URL', () => {
      getLogoutAPI().then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('logout_url')
      })
    })
  })
  context.skip('POST /api/auth/cleanup-sessions', () => {
    it('should cleanup the sessions', () => {
      cleanupSessionAPI().then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('deleted_count').and.to.be.a('number')
        expect(response.body).to.have.property('message').and.to.be.a('string').contains(response.body.deleted_count)
      })
    })
  })
  context('GET /api/auth/strava/auth-url', () => {
    it('should return the Strava auth URL', () => {
      getStravaAuthURLAPI().then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('auth_url')
      })
    })
  })
})