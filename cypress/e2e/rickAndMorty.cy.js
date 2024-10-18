/// <reference types="cypress"/>

describe('Rick and Morty API', () => {

  // Cenário 01 - List Others Apis
  it('List Others Apis', () => {
    cy.request({
      method: 'GET',
      url: '/api'
    })
    .then((result) => {
      console.log('Cenário 01: ', result)

      expect(result.status).to.equal(200)
      expect(result.characters).to.not.equal('') // ('https://rickandmortyapi.com/api/character')
      expect(result.episodes).to.not.equal('') // https://rickandmortyapi.com/api/episode
      expect(result.locations).to.not.equal('') // https://rickandmortyapi.com/api/location
    })
  })

  // Cenário 02 - List All Characters
  it('List All Characters', () => {
    cy.request({
      method: 'GET',
      url: '/api/character'
    })
    .then((result) => {
      console.log('Cenário 02: ', result)

      expect(result.status).to.equal(200)
    })
  })

  // Cenário 03 - Filter Characters For Status
  it('Filter Characters For Status', () => {
    cy.request({
      method: 'GET',
      url: '/api/character/?name=rick&status=alive'
    })
    .then((result) => {
      console.log('Cenário 03: ', result)

      expect(result.status).to.equal(200)
    })
  })

  // Cenário 04 - Filter Characters For ID
  it('Filter Characters For ID', () => {
    cy.request({
      method: 'GET',
      url: '/api/character/2'
    })
    .then((result) => {
      console.log('Cenário 04: ', result)

      expect(result.status).to.equal(200)
      expect(result.created).to.not.equal('') 
      expect(result.episode).to.not.equal('') 
      expect(result.gender).to.not.equal('') 
      expect(result.id).to.not.equal('')
      expect(result.image).to.not.equal('')
      expect(result.name).to.not.equal('')
    })
  })

  // Cenário 05 - Filter Multiple Characters
  it('Filter Multiple Characters', () => {
    cy.request({
      method: 'GET',
      url: 'api/character/1,183'
    })
    .then((result) => {
      console.log('Cenário 05: ', result)

      expect(result.status).to.equal(200)
    })
  })

  // Cenário 06 - List All Location
  it('List All Location', () => {
    cy.request({
      method: 'GET',
      url: 'api/location'
    })
    .then((result) => {
      console.log('Cenário 06: ', result)

      expect(result.status).to.equal(200)
    })
  })

  // Cenário 07 - Filter Location For ID
  it('Filter Location For ID', () => {
    cy.request({
      method: 'GET',
      url: 'api/location/3'
    })
    .then((result) => {
      console.log('Cenário 07: ', result)

      expect(result.status).to.equal(200)
    })
  })

  // Cenário 08 - Filter Multiple Locations
  it('Filter Multiple Locations', () => {
    cy.request({
      method: 'GET',
      url: 'api/location/3,21'
    })
    .then((result) => {
      console.log('Cenário 08: ', result)

      expect(result.status).to.equal(200)
    })
  })

  // Cenário 09 - List All Episodes
  it('List All Episodes', () => {
    cy.request({
      method: 'GET',
      url: 'api/episode'
    })
    .then((result) => {
      console.log('Cenário 09: ', result)

      expect(result.status).to.equal(200)
    })
  })

  // Cenário 10 - Filter Episode For ID
  it('Filter Episode For ID', () => {
    cy.request({
      method: 'GET',
      url: 'api/episode/28'
    })
    .then((result) => {
      console.log('Cenário 10: ', result)

      expect(result.status).to.equal(200)
    })
  })

  // Cenário 11 - Filter Multiple Episode
  it('Filter Multiple Episode', () => {
    cy.request({
      method: 'GET',
      url: 'api/episode/10,28'
    })
    .then((result) => {
      console.log('Cenário 11: ', result)

      expect(result.status).to.equal(200)
    })
  })
})