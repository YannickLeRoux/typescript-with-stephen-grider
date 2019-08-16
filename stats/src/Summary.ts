import { MatchData } from './MatchData';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReports';

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport('report.html'));
  }
  constructor(public analyzer: Analyser, public outputTarget: OutputTarget) {}

  buildAndPrintOutput(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
