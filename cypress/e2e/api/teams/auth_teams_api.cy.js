import {
  getTeamsAPI,
  createTeamAPI,
  getTeamAPI,
  updateTeamAPI,
  deleteTeamAPI,
  inviteToTeamAPI,
  removeFromTeamAPI,
  acceptTeamInviteAPI,
  declineTeamInviteAPI,
  getAthleteTeamsAPI,
  leaveTeamAPI,
  getAthleteTeamInvitesAPI,
} from '../../../support/api/teamsAPI'

describe('Auth Teams API', () => {
  context('GET /api/teams', () => {
    it('should return a 401 status code', () => {
      getTeamsAPI(false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('POST /api/teams', () => {
    it('should return a 401 status code', () => {
      createTeamAPI({
        name: 'Test Team',
        description: 'Test Description',
        location: 'Test Location',
        is_coach: true,
        private: false,
      }, {}, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('GET /api/teams/:id', () => {
    it('should return a 401 status code', () => {
      getTeamAPI(3, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('PUT /api/teams/:id', () => {
    it('should return a 401 status code', () => {
      updateTeamAPI(3, {
        name: 'Test Team Updated',
        description: 'Test Description',
        location: 'Test Location Updated',
        is_coach: false,
        private: true,
      }, {}, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('DELETE /api/teams/:id', () => {
    it('should return a 401 status code', () => {
      deleteTeamAPI(3, {}, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('POST /api/teams/:id/invite', () => {
    it('should return a 401 status code', () => {
      inviteToTeamAPI(3, {
        athlete_id: 1,
        role: 'member',
      }, {}, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('POST /api/teams/:id/remove', () => {
    it('should return a 401 status code', () => {
      removeFromTeamAPI(3, {
        athlete_id: 1,
        role: 'member',
      }, {}, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('POST /api/teams/:id/invite/accept', () => {
    it('should return a 401 status code', () => {
      acceptTeamInviteAPI(1, {}, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('POST /api/teams/:id/invite/decline', () => {
    it('should return a 401 status code', () => {
      declineTeamInviteAPI(1, {}, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('GET /api/athlete/teams', () => {
    it('should return a 401 status code', () => {
      getAthleteTeamsAPI({}, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('DELETE /api/athlete/teams/:id', () => {
    it('should return a 401 status code', () => {
      leaveTeamAPI(1, {}, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
  context('GET /api/athlete/invites', () => {
    it('should return a 401 status code', () => {
      getAthleteTeamInvitesAPI({}, false).then((response) => {
        expect(response.status).to.equal(401)
      })
    })
  })
})
