import React from "react";
import styles from './App.module.scss'
import {Typography} from '@mui/material';
import { BiImport } from "react-icons/bi";
import {PiExportBold} from "react-icons/pi";
import SearchAppBar from "./components/search";
import MediaCard from "./components/grid";
import dropBox from './components/icons/Без названия.png'
import   lyft from './components/icons/unnamed.png'
import medium from './components/icons/medium logo.png'
import slack from './components/icons/slack.jpeg'
import git from './components/icons/GitHub-logo.png'
import squar from './components/icons/squar1.png'

function App() {
    return (
        <div className="App">
            <header className={styles.header}>
                <div className={styles.row}>
                    <Typography variant="h4" className={styles.text}>
                        Companies
                    </Typography>
                    <i className={styles.add}> + Add</i>
                </div>
                <i className={styles.icons}>
                    <BiImport /> import
                </i>
                <i className={styles.icons}>
                    <PiExportBold/>export
                </i>
            </header>
            <SearchAppBar/>
            <div className={styles.cardRow}>
                <MediaCard img= {dropBox}
                           alt='drop box'
                           title='Dropbox'
                           description='Dropbox is a file hosting service that affers cloud storege,file synchronization,a personal cloud'/>
                <MediaCard img= {slack}
                           alt='Slack'
                           title='Slack'
                           description='Slack is a new way to communicate with your team. It s faster, better organized, and more secure than email.'/>
                <MediaCard img= {medium}
                           alt = 'medium'
                           title = 'Medium Corporatin'
                           description = 'Medium is an open platform where readers find dynamic thinking, '/>
                <MediaCard img= {lyft}
                           alt = 'lyft'
                           title = 'Lyat'
                           description = 'Rideshare with Lyft. Lyft is your friend with a car, whenever you need one. '/>
                <MediaCard img= {git}
                           alt = 'github'
                           title = 'GitHub'
                           description = 'GitHub is where over 100 million developers shape the future of software, together.  '/>
                <MediaCard img= {squar}
                           alt = 'suare'
                           title = 'Squarespace'
                           description = 'Create a customizable website or online store with an all-in-one solution from Squarespace.'/>
            </div>
        </div>
    );
}

export default App;
