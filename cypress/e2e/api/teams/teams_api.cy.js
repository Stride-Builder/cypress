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

describe('Teams API', () => {
  const teamsCreated = []
  beforeEach(() => {
    cy.login()
  })

  context('GET /api/teams', () => {
    it('should return a list of teams that the current authenticated athlete is a member of', () => {
      getTeamsAPI().then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.data).to.be.an('array')
      })
    })
  })
  context('POST /api/teams', () => {
    it('should create a new public team as a member', () => {
      const teamBody = {
        name: 'Cypress Test Team',
        description: 'Cypress Test Description',
        location: 'Cypress Test Location',
        is_coach: false,
        private: false,
      }
      createTeamAPI(teamBody).then((response) => {
        expect(response.status).to.equal(201)
        teamsCreated.push(response.body.data)
        expect(response.body.data.name).to.equal(teamBody.name)
        expect(response.body.data.description).to.equal(teamBody.description)
        expect(response.body.data.location).to.equal(teamBody.location)
        expect(response.body.data.private).to.equal(teamBody.private)
        expect(response.body.data.owner).to.deep.include({
          id: Cypress.currentUserId,
          name: Cypress.currentUserName,
        })
        expect(response.body.data.members).to.be.an('array')
        expect(response.body.data.members.length).to.equal(1)
        expect(response.body.data.members[0]).to.deep.include({
          id: Cypress.currentUserId,
          name: Cypress.currentUserName,
        })
        expect(response.body.data.coaches).to.be.an('array')
        expect(response.body.data.coaches.length).to.equal(0)
        expect(response.body.data.invites).to.be.an('array')
        expect(response.body.data.invites.length).to.equal(0)
        expect(response.body.data.createdAt).to.be.a('string')
        expect(response.body.data.updatedAt).to.be.a('string')
      })
    })
    it('should create a new private team as a member', () => {
      const teamBody = {
        name: 'Cypress Test Team',
        description: 'Cypress Test Description',
        location: 'Cypress Test Location',
        is_coach: false,
        private: true,
      }
      createTeamAPI(teamBody).then((response) => {
        expect(response.status).to.equal(201)
        teamsCreated.push(response.body.data)
        expect(response.body.data.name).to.equal(teamBody.name)
        expect(response.body.data.description).to.equal(teamBody.description)
        expect(response.body.data.location).to.equal(teamBody.location)
        expect(response.body.data.private).to.equal(teamBody.private)
      })
    })
  })
  context('GET /api/teams/:id', () => {
    it('should return a team by id', () => {
      getTeamAPI(teamsCreated[0]._id).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.data.name).to.equal(teamsCreated[0].name)
        expect(response.body.data.description).to.equal(teamsCreated[0].description)
        expect(response.body.data.location).to.equal(teamsCreated[0].location)
        expect(response.body.data.private).to.equal(teamsCreated[0].private)
        expect(response.body.data.owner).to.be.deep.include(teamsCreated[0].owner)
        expect(response.body.data.members).to.be.an('array')
        expect(response.body.data.members.length).to.equal(teamsCreated[0].members.length)
        expect(response.body.data.coaches).to.be.an('array')
        expect(response.body.data.coaches.length).to.equal(teamsCreated[0].coaches.length)
        expect(response.body.data.invites).to.be.an('array')
        expect(response.body.data.invites.length).to.equal(teamsCreated[0].invites.length)
      })
    })

    it('should return a 400 status code if the team is not found', () => {
      getTeamAPI(999999, false).then((response) => {
        expect(response.status).to.equal(400)
      })
    })
  })
  context('PUT /api/teams/:id', () => {
    it('should update a team by id', () => {
      updateTeamAPI(teamsCreated[0]._id, {
        name: 'Cypress Test Team Updated',
        description: 'Cypress Test Description Updated',
        location: 'Cypress Test Location Updated',
      }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.data.name).to.equal('Cypress Test Team Updated')
        expect(response.body.data.description).to.equal('Cypress Test Description Updated')
        expect(response.body.data.location).to.equal('Cypress Test Location Updated')
      })
    })
    it('should return a 400 status code if the team is not found', () => {
      updateTeamAPI(999999, {
        name: 'Cypress Test Team Updated',
        description: 'Cypress Test Description Updated',
        location: 'Cypress Test Location Updated',
      }).then((response) => {
        expect(response.status).to.equal(400)
      })
    })
    it('should return a 403 status code if the user is not the owner of the team', () => {
      updateTeamAPI(1, {
        name: 'Cypress Test Team Updated',
        description: 'Cypress Test Description Updated',
        location: 'Cypress Test Location Updated',
      }).then((response) => {
        expect(response.status).to.equal(403)
      })
    })
  })
  context('DELETE /api/teams/:id', () => {
    it('should delete a team by id', () => {
      deleteTeamAPI(teamsCreated[0]._id).then((response) => {
        expect(response.status).to.equal(200)
        teamsCreated.splice(teamsCreated.indexOf(teamsCreated[0]), 1)
      })
    })
  })

  after(() => {
    teamsCreated.forEach((team) => {
      deleteTeamAPI(team._id).then((response) => {
        expect(response.status).to.equal(200)
        teamsCreated.splice(teamsCreated.indexOf(team), 1)
      })
    })
  })
})
