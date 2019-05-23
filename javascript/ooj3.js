const spaceship = {
    homePlanet:'Earth',
    color:'silver'
};

const spaceship1 = {
    homePlanet:'Earth',
    color:'blue'
};

let paintIt = (obj) => {
    obj.color='Teal'
}

paintIt(spaceship)

let tryAssignment = (obj) => {
    obj = {
        identified : false,
        transporttype: 'flying'
    }
}

