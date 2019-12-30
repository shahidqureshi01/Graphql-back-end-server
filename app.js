const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressGraphMiddleware =  require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const helpers = require('./helpers/utils');

const Films = require('./models/films');
const Species = require('./models/species');
const Starships = require('./models/starships');
const Planets = require('./models/planets');
const People = require('./models/people');
const Vehicles = require('./models/vehicles')

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use('/graphql', expressGraphMiddleware({
    schema: buildSchema(`

        type Films {
            longestCrawl: String
            mostAppearedActor: String
            mostAppearedSpecie: [String]
            pilots: [String]
        }

        type RootQuery {
            films:Films
        }

        schema {
            query: RootQuery
        }
    `),
    rootValue: {
        films: async () => {
            let longestCrawl, mostAppearedActor, mostAppearedSpecie, pilotsArr;

            const getData = () => {
                return new Promise((resolve, reject)=> {
                    Films.find()
                    .then(films => {
                        longestCrawl = helpers.getLongestCrawl(films);
                        Species.find()
                        .then(specie => {
                            People.find()
                            .then(people => {
                                mostAppearedActor = helpers.getMostAppearace(films, people);
                                mostAppearedSpecie = helpers.getSpecieCount(films, specie);
                                Starships.find()
                                .then(starships => {
                                    Planets.find()
                                    .then(planets => {
                                        pilotsArr = helpers.getPilots(people, starships, specie, planets);
                                    
                                        resolve({
                                            longestCrawl,
                                            mostAppearedActor,
                                            mostAppearedSpecie,
                                            pilotsArr
                                        });
                                    })
                                })
                            })
                        })
                    })
                    .catch(error => {
                        console.log(error);
                    });
                });
            }

            await getData()
            
            return { 
                longestCrawl, 
                mostAppearedActor:mostAppearedActor[0].name,
                mostAppearedSpecie, 
                pilots: pilotsArr
            };
        }
    },
    graphiql: true
}));

const connectionStr = 'mongodb://candidate:PrototypeRocks123654@ds345028.mlab.com:45028/star-wars';

mongoose.connect(
connectionStr, 
{useNewUrlParser: true,
useUnifiedTopology: true 
})
.then(() => { 
        app.listen(3000);
        console.log('database  connected');
})
.catch(error => {
    console.log(error);
});
