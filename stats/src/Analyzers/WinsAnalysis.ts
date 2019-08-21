import { Analyser } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResults';

export class WinsAnalysis implements Analyser {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Team $d{this.team} won ${wins} games`;
  }
}