
const Adeya = require('./config');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./textsew/' + Adeya.TEXT + '.json')) {
    console.log(
        chalk.green.bold('Loading ' + Adeya.TEXT + ' textsew...')
    );

    var json = JSON.parse(fs.readFileSync('./textsew/' + Adeya.TEXT + '.json'));
} else {
    console.log(
        chalk.red.bold('')
    );

    var json = JSON.parse(fs.readFileSync('./textsew/SEW.json'));
}

function getrule(file) {
    return json['STRINGS'][file];
}

module.exports = {
    textmetro: json,
    getrule: getrule
}
