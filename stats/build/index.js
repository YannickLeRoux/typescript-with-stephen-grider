"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Create an object that satisfy the 'DataReader' Interface
// Create an instance of MatchReader and pass in something that satisfy
// the DataReader Interface
var matchReader = MatchReader_1.MatchReader.fromCSV('football.csv');
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintOutput(matchReader.matches);
