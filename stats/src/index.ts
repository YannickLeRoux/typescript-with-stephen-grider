import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Create an object that satisfy the 'DataReader' Interface

// Create an instance of MatchReader and pass in something that satisfy
// the DataReader Interface

const matchReader = MatchReader.fromCSV('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintOutput(matchReader.matches);
