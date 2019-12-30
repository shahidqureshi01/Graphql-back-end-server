const chai = require('chai')
const expect = chai.expect;
const assert = chai.assert;

const data = require('../helpers/data/test-data.js');
const helpers = require('../helpers/utils');

describe('Longest opening crawl', () => {
    it('caluclate longest opening crawl', ()=> {
        assert.equal(helpers.getLongestCrawl(data.films), 'A New Hope');
    })
});

describe('Most Appearances', () => {
    it('Finds most appeared character', ()=> {
        assert.equal(helpers.getMostAppearace(data.films, data.people)[0].name, 'Shahid');
    })
});

describe('Most Appearances by a specie', () => {
    it('Finds most appeared specie', ()=> {
        assert.equal(helpers.getSpecieCount(data.films, data.species)[0], 'Human (6)');
    })
});

describe('Pilots from a planet', () => {
    const starships = data.starships;
    const films = data.films;
    const people = data.people;
    const species = data.species;
    const planets = data.planets;
    console.log(helpers.getPilots(people, starships, species, planets))

    it('Counts how many pilots are provided by a planet ', ()=> {
        assert.equal(helpers.getPilots(people, starships, species, planets)[0], 'Earth (2) Shahid - Human,Biggs Darklighter - Human');
        assert.equal(helpers.getPilots(people, starships, species, planets)[1], 'Earch (1) R2-D2 - Human');
    })
});