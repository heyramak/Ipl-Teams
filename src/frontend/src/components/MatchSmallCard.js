import { React } from 'react';
import { Link } from 'react-router-dom';

import './MatchSmallCard.scss';

export const MatchSmallCard = ({ match, teamName }) => {
    if (!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon = teamName === match.matchWinner;
    const isTie = match.result === 'tie' ? true : false;
    const isMatchCancelled = match.matchWinner === "NA" ? true : false;
    var cardColour = isTie ? 'MatchSmallCard tie-card' : isMatchCancelled ? 'MatchSmallCard cancelled-card' : isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card';
    var matchResult = "";
    if (isTie) {
        matchResult = "There was a tie between " + match.team1 + " and " + match.team2;
    }
    else if (isMatchCancelled) {
        matchResult = "Match Cancelled";
    }
    else {
        matchResult = match.matchWinner + " won by " + match.resultMargin + " " + match.result;
    } return (
        <div className={cardColour}>
            <span className="vs">vs</span>
            <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
            <p className="match-result">{matchResult} </p>

        </div>
    );
}