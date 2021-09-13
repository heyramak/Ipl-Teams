import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { YearSelector } from '../components/YearSelector';
//import Select from 'react-select';

import './MatchPage.scss';
const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));
export const MatchPage = () => {


    const [matches, setMatches] = useState([]);
    const classes = useStyles();
    const { teamName, year } = useParams();
    const [filteredMatch, setFilteredMatch] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterTerm, setFilterTerm] = useState("");
    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);
                setFilteredMatch(data);

            };
            fetchMatches();



        }, [teamName, year]
    );

    const editFilterTerm = (event) => {
        debugger;
        let filterTerm = event.target.value;
        setFilterTerm(filterTerm);
        let currentList = matches;
        let filteredList = [];
        switch (filterTerm) {
            case "win":
                filteredList = currentList.filter(item =>
                    item.matchWinner === teamName);
                break;
            case "loss":
                filteredList = currentList.filter(item =>
                    item.matchWinner !== teamName);
                break;
            case "tie":
                filteredList = currentList.filter(item =>
                    item.result === "tie");
                break;
            case "bat":
                filteredList = currentList.filter(item =>
                    item.tossDecision === "bat");
                break;
            case "ball":
                filteredList = currentList.filter(item =>
                    item.tossDecision === "field");
                break;
            default:
                filteredList = currentList;
        }
        if (filteredList && filteredList.length > 0) {
            setFilteredMatch(filteredList);
        }
    }

    const editSearchTerm = (event) => {
        let searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        let currentList = matches;
        let filteredList = [];
        filteredList = currentList.filter(
            (item) =>
                item.city.toLowerCase().includes(searchTerm.toLowerCase()) || //City
                item.playerOfMatch.toLowerCase().includes(searchTerm.toLowerCase()) || //player of match
                item.venue.toLowerCase().includes(searchTerm.toLowerCase()) || //venue
                item.umpire1.toLowerCase().includes(searchTerm.toLowerCase()) || //umpire1
                item.umpire2.toLowerCase().includes(searchTerm.toLowerCase())  //umpire2

        );
        if (filteredList && filteredList.length > 0) {
            setFilteredMatch(filteredList);
        }
    }


    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h3> Select Year </h3>
                <YearSelector teamName={teamName} />
            </div>
            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                <div className="filter-option">
                    <FormControl className={classes.margin}>
                        <h3> Filter </h3>
                        <InputLabel id="select-label"></InputLabel>
                        <Select
                            labelId="select-label"
                            id="filter"
                            value={filterTerm}
                            onChange={editFilterTerm}
                            input={<BootstrapInput />}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'win'}>Win</MenuItem>
                            <MenuItem value={'loss'}>Loss</MenuItem>
                            <MenuItem value={'tie'}>Tie</MenuItem>
                            <MenuItem value={'bat'}>Bat First</MenuItem>
                            <MenuItem value={'ball'}>Bowl First</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <h3> Search by keywords </h3>
                        <InputLabel htmlFor="textbox"></InputLabel>
                        <BootstrapInput id="textbox" value={searchTerm}
                            onChange={editSearchTerm}
                            placeholder="Search by keyword" />
                    </FormControl>
                </div>
                {
                    filteredMatch && filteredMatch.length > 0 ?
                        filteredMatch.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
                        :
                        <div className="col">
                            <p style={{ "textAlign": "center", "padding": "20%" }}>No matches found</p>
                        </div>
                }
            </div>

        </div>
    );
}