function getLongestCrawl(films) {  
    let count = -Infinity;
    let title = '';
    
    films.map(f => {
        if(f.opening_crawl.length > count) {
            count = f.opening_crawl.length;
            title = f.title;
        }
    });

    return title;
}

function getMostAppearace(films, people) {
    let arr = [];
    
    films.map(f => {
        arr.push(...f.characters);
    });

    let obj = countAppearance(arr);
    let res = mostAppeared(obj);
    
    return people.filter(p => p.id == res);
}

function countAppearance(arr) {

    let countObj = arr.reduce(function (acc, curr) {
        if (typeof acc[curr] == 'undefined') {
          acc[curr] = 1;
        } else {
          acc[curr] += 1;
        }
      
        return acc;
    }, {});

    return countObj;
}

function mostAppeared(obj) {
    return Object.keys(obj)
    .reduce((a, b) => obj[a] > obj[b]? a : b);
}

function getSpecieCount(films, specie) {
    let obj = {};
    let filmCharacters = [];

    films.map(film => {
        filmCharacters.push(...film.characters);
    });
    
    specie.map(s => {
        s.people.map(ele => {
            filmCharacters.map(character => {
                if(ele === character) {
                    if(obj[s.name]) {
                        obj[s.name] += 1;
                    } else {
                        obj[s.name] = 1;
                    }
                }
            })
        })
    })
    
    return objToArr(obj);
}

function objToArr(obj) {
    let arr = [];

    for(let key in obj) {
        arr.push(key + ' (' + obj[key] + ')');
    }

    return arr;
}

function getPilots(people, starships, specie, planets) {
    let pid = getPilotIDs(starships);
    let onlyPilots = matchPilotsWithIDs(pid, people);
    let pilotSpecies = matchPilotsWithSpecie(onlyPilots, specie);
    let PilotsHomeworld = matchPilotsWithHomeworld(pilotSpecies, planets);
    return convertToStr(PilotsHomeworld);
    
    // helper functions
    function convertToStr(obj) {
        let arr = [];

        for(let key in obj) {
            arr.push(key + ' (' + obj[key].length + ') ' + obj[key].toString());
        }
        
        return arr;
    }

    function matchPilotsWithHomeworld(_pilotSpecies, planets) {
        let obj = {};

        planets.map(p => {
            _pilotSpecies.map(plt => {
                if(p.id === plt.homeworld) {
                    let sp = plt.race ? ' - ' + plt.race : '';
                    if(!obj[p.name]) {
                        obj[p.name] = [plt.name + sp];
                    } else {
                        obj[p.name].push(plt.name + sp);
                    }
                }
            });
        });

        return obj;
    }

    function matchPilotsWithSpecie(pilots, specie) {
        let _pilots = pilots;

        pilots.map((p, index) => {
            specie.map(s => {
                if(s.people.includes(p.id)) {
                    _pilots[index].race = (s.name);
                }
            }); 
        });

        return _pilots;
    }

    function matchPilotsWithIDs(pid, people) {
        let pilots = people.filter(p => {
            return pid.includes(p.id);
        });
        
        return pilots;
    }

    function getPilotIDs(starships ) {
        let IDs = [];
        starships.map(s => {
            s.pilots.map(p => {
                IDs.push(p);
            })
        });

        return [... new Set(IDs)];
    }
    // end of helper functions
}

module.exports = {
  getLongestCrawl,
  getMostAppearace,
  getSpecieCount,
  getPilots
}