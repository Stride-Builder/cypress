import { getAthleteAPI, createAthleteAPI, removeAthleteConnectionAPI, updateAthleteAPI } from '../../../support/api/athleteAPI'

describe('Auth Athletes API', () => {
  context('GET /api/athlete', () => {
    it('should return a 401 status code', () => {
      getAthleteAPI(false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('POST /api/athlete', () => {
    it('should return a 401 status code', () => {
      createAthleteAPI({}, {}, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('PUT /api/athlete', () => {
    it('should return a 401 status code', () => {
      updateAthleteAPI({ name: 'QA User', privacy: false, coach: true }, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('DELETE /api/athlete/connections/strava', () => {
    it('should return a 401 status code', () => {
      removeAthleteConnectionAPI('strava', { provider: 'strava', id: '1234567890' }, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
})
