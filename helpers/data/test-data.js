let films = [ 
    { 
        characters:  [ 1, 2, 3, 4, 5, 6],
        planets: [ 1, 2, 3 ],
        species: [ 1, 2, 3, 4, 5 ],
        starships: [ 2, 3, 5, 9, 10, 11, 12, 13 ],
        vehicles: [ 4, 6, 7, 8 ],
        opening_crawl:
         'It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire\'s\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.',
        title: 'A New Hope',
        id: 1 

    },
    {
        characters:  [ 1, 2, 5, 6],
        planets: [ 1, 2, 3, 4 ],
        species: [ 1, 2, 3, ],
        starships: [ 2, 3, 5, 9, 10 ],
        vehicles: [ 4, 6, 7, 8 ],
        opening_crawl:
         'It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.',
        title: 'Lost Hope',
        id: 2 
    },
    {
        characters:  [ 1 ],
        planets: [ 1, 2, 3, 4 ],
        species: [ 1, 2, 3, ],
        starships: [ 2, 3, 5, 9, 10 ],
        vehicles: [ 4, 6, 7, 8 ],
        opening_crawl:
        'Shortes ever crawl',
        title: 'Hopeless',
        id: 3
    }
]

let people = [
    { 
        birth_year: 'unknown',
        created: '2014-12-10T15:57:50.959Z',
        edited: '2014-12-20T21:17:50.321Z',
        eye_color: 'red',
        gender: 'n/a',
        hair_color: 'n/a',
        height: '97',
        homeworld: 1,
        mass: '32',
        name: 'Shahid',
        skin_color: 'white, red',
        id: 1 },
    { 
        birth_year: '24BBY',
        created: '2014-12-10T15:59:50.509Z',
        edited: '2014-12-20T21:17:50.323Z',
        eye_color: 'brown',
        gender: 'male',
        hair_color: 'black',
        height: '183',
        homeworld: 1,
        mass: '84',
        name: 'Biggs Darklighter',
        skin_color: 'light',
        id: 2 },
    { 
        birth_year: '33BBY',
        created: '2014-12-10T15:11:50.376Z',
        edited: '2014-12-20T21:17:50.311Z',
        eye_color: 'red',
        gender: 'n/a',
        hair_color: 'n/a',
        height: '96',
        homeworld: 2,
        mass: '32',
        name: 'R2-D2',
        skin_color: 'white, blue',
        id: 3 },
    { 
        birth_year: '112BBY',
        created: '2014-12-10T15:10:51.357Z',
        edited: '2014-12-20T21:17:50.309Z',
        eye_color: 'yellow',
        gender: 'n/a',
        hair_color: 'n/a',
        height: '167',
        homeworld: 1,
        mass: '75',
        name: 'C-3PO',
        skin_color: 'gold',
        id: 4},
    { 
        birth_year: '200BBY',
        created: '2014-12-10T16:42:45.066Z',
        edited: '2014-12-20T21:17:50.332Z',
        eye_color: 'blue',
        gender: 'male',
        hair_color: 'brown',
        height: '228',
        homeworld: 2,
        mass: '112',
        name: 'Chewbacca',
        skin_color: 'unknown',
        id: 5 },
    { 
        birth_year: '41.9BBY',
        created: '2014-12-10T16:20:44.310Z',
        edited: '2014-12-20T21:17:50.327Z',
        eye_color: 'blue',
        gender: 'male',
        hair_color: 'blond',
        height: '188',
        homeworld: 1,
        mass: '84',
        name: 'Anakin Skywalker',
        skin_color: 'fair',
        id: 6 
    }
]

let species = [ 
    { people: [ 1,2,3 ],
    average_height: '180',
    average_lifespan: '120',
    classification: 'mammal',
    created: '2014-12-10T13:52:11.567Z',
    designation: 'sentient',
    edited: '2014-12-20T21:36:42.136Z',
    eye_colors: 'brown, blue, green, hazel, grey, amber',
    hair_colors: 'blonde, brown, black, red',
    homeworld: 9,
    language: 'Galactic Basic',
    name: 'Human',
    skin_colors: 'caucasian, black, asian, hispanic',
    id: 1 },
  { people: [ 4 ],
    average_height: '170',
    average_lifespan: 'unknown',
    classification: 'sentient',
    created: '2014-12-10T17:05:26.471Z',
    designation: 'reptilian',
    edited: '2014-12-20T21:36:42.144Z',
    eye_colors: 'black',
    hair_colors: 'n/a',
    homeworld: 23,
    language: 'Galatic Basic',
    name: 'Rodian',
    skin_colors: 'green, blue',
    id: 2 },
  { people: [ 5, 6 ],
    average_height: '300',
    average_lifespan: '1000',
    classification: 'gastropod',
    created: '2014-12-10T17:12:50.410Z',
    designation: 'sentient',
    edited: '2014-12-20T21:36:42.146Z',
    eye_colors: 'yellow, red',
    hair_colors: 'n/a',
    homeworld: 24,
    language: 'Huttese',
    name: 'Hutt',
    skin_colors: 'green, brown, tan',
    id: 3 },
  { people: [ 7 ],
    average_height: '66',
    average_lifespan: '900',
    classification: 'mammal',
    created: '2014-12-15T12:27:22.877Z',
    designation: 'sentient',
    edited: '2014-12-20T21:36:42.148Z',
    eye_colors: 'brown, green, yellow',
    hair_colors: 'brown, white',
    homeworld: 28,
    language: 'Galactic basic',
    name: 'Yoda\'s species',
    skin_colors: 'green, yellow',
    id: 4 },
  { people: [ 8 ],
    average_height: '160',
    average_lifespan: 'unknown',
    classification: 'amphibian',
    created: '2014-12-18T11:09:52.263Z',
    designation: 'sentient',
    edited: '2014-12-20T21:36:42.153Z',
    eye_colors: 'yellow',
    hair_colors: 'none',
    homeworld: 31,
    language: 'Mon Calamarian',
    name: 'Mon Calamari',
    skin_colors: 'red, blue, brown, magenta',
    id: 5 
    } 
]

let starships = [
    { 
        pilots: [ 1, 2 ],
        MGLT: '75',
        hyperdrive_rating: '0.5',
        starship_class: 'Light freighter',
        id: 1
    },
    { 
        pilots: [ 3 ],
        MGLT: '100',
        hyperdrive_rating: '1.0',
        starship_class: 'Starfighter',
        id: 2
    }
]

let planets = [
    {
        climate: 'arid',
        created: '2014-12-09T13:50:49.641Z',
        diameter: '10465',
        edited: '2014-12-20T20:58:18.411Z',
        gravity: '1 standard',
        name: 'Earth',
        orbital_period: '304',
        population: '200000',
        rotation_period: '23',
        surface_water: '1',
        terrain: 'desert',
        id: 1 
    },
    {
        climate: 'frozen',
        created: '2014-12-10T11:39:13.934Z',
        diameter: '7200',
        edited: '2014-12-20T20:58:18.423Z',
        gravity: '1.1 standard',
        name: 'Earch',
        orbital_period: '549',
        population: 'unknown',
        rotation_period: '23',
        surface_water: '100',
        terrain: 'tundra, ice caves, mountain ranges',
        id: 2 
    }
    
]

module.exports.people = people;
module.exports.films = films;
module.exports.species = species;
module.exports.starships = starships;
module.exports.planets = planets;