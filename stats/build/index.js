"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVFileReader_1 = require("./CSVFileReader");
var MatchResults_1 = require("./MatchResults");
var reader = new CSVFileReader_1.CSVFileReader('football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
