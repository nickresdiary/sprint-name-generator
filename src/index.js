const adjectives = require('./common/adjectives.json'),
      animals = require('./common/animals.json'),
      argv = require('minimist')(process.argv.slice(2));

let letter = argv._[0],
    adjectivesByLetter = adjectives[letter],
    animalsByLetter = animals[letter],
    randomAdjective = adjectivesByLetter[Math.floor(Math.random() * adjectivesByLetter.length)],
    randomAnimal = animalsByLetter[Math.floor(Math.random() * animalsByLetter.length)];

console.log(randomAdjective + ' ' + randomAnimal);